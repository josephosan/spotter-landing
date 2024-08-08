<template>
  <div class="register-page">
    <div class="register-box">
      <div class="register-form">
        <el-form :model="form" :rules="rules" ref="registerForm">
          <div class="register-form-header">
            <p>فرم ثبت‌نام</p>
          </div>

          <div class="register-form-input">
            <div class="full-name">
              <el-form-item prop="firstName">
                <el-input v-model="form.firstName" placeholder="نام" type="text"></el-input>
              </el-form-item>
              <el-form-item prop="lastName">
                <el-input v-model="form.lastName" placeholder="نام خانوادگی" type="text"></el-input>
              </el-form-item>
            </div>

            <el-form-item prop="gender">
              <el-select v-model="form.gender" placeholder="جنسیت" class="rtl-select">
                <el-option label="زن" :value="0" />
                <el-option label="مرد" :value="1" />
              </el-select>
            </el-form-item>

            <el-form-item prop="phoneNumber">
              <el-input v-model="form.phoneNumber" placeholder="شماره تلفن"></el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input v-model="form.password" placeholder="رمز عبور" type="password" show-password></el-input>
            </el-form-item>

            <el-form-item prop="confirmPassword">
              <el-input
                v-model="form.confirmPassword"
                placeholder="تکرار رمز عبور"
                type="password"
                show-password
              ></el-input>
            </el-form-item>
          </div>

          <div class="register-form-footer">
            <div class="footer-checkbox">
              <el-checkbox v-model="checked" @change="handleCheckboxChange">
                <p>تمام <a @click="dialogVisible = true"> قوانین </a> را میپذیرم</p>
              </el-checkbox>
              <el-dialog v-model="dialogVisible" title="Tips">
                <span>This is a message</span>
              </el-dialog>
            </div>
            <el-button type="primary" :disabled="!checked" @click="handleRegister" :loading="loading"
              >ثبت‌نام</el-button
            >
          </div>
        </el-form>
        <div class="register-img">
          <img src="/public/images/login.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useAppStore } from '~/stores/app'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import type { ElForm } from 'element-plus'
import type { CheckboxValueType } from 'element-plus'

const authStore = useAuthStore()
const { register } = storeToRefs(authStore)

const router = useRouter()
const { appLoading } = storeToRefs(useAppStore())

// ////////////////////////// States
const form = ref({
  firstName: '',
  lastName: '',
  gender: 0 as 0,
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  otpCode: ''
})

const checked = ref<CheckboxValueType>(false)
const loading = ref(false)
const dialogVisible = ref(false)
const registerForm = ref<InstanceType<typeof ElForm> | null>(null)
const { $notification } = useNuxtApp()

// /////////////////////////////// Validation rules
const rules = {
  firstName: [{ required: true, message: '', trigger: 'blur' }],
  lastName: [{ required: true, message: '', trigger: 'blur' }],
  gender: [{ required: true, message: '', trigger: 'change' }],
  phoneNumber: [{ required: true, message: '', trigger: 'blur' }],
  password: [{ required: true, message: '', trigger: 'blur' }],
  confirmPassword: [
    { required: true, message: '', trigger: 'blur' },
    {
      validator: (rule: any, value: string, callback: Function) => {
        if (value !== form.value.password) {
          callback('رمز عبور با تکرار یکی نیست')
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

// //////////////////////////////// Page meta
definePageMeta({
  layout: 'auth'
})

useHead({
  style: [
    {
      children: 'html, body { height: 100%; }'
    }
  ]
})

// ////////////////////////////////////Methods
const handleCheckboxChange = (value: CheckboxValueType) => {
  checked.value = !!value
}

const handleRegister = () => {
  if (registerForm.value) {
    registerForm.value.validate(async (valid: boolean) => {
      if (valid) {
        appLoading.value = true
        register.value = form.value

        try {
          await router.push('/register/verification')
          authStore.verify()
        } catch (err) {
          console.log(err)
          $notification('error', 'ناموفق', 'ثبت نام با خطا مواجه شد.')
        } finally {
          appLoading.value = false
        }
      } else {
        $notification('error', 'ناموفق', 'لطفا تمامی خطاها را رفع کنید.')
      }
    })
  }
}
</script>

<style lang="scss">
@import '/assets/scss/pages/register.scss';
</style>
