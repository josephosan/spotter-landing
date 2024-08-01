<template>
  <div class="login-box">
    <div class="login-form">
      <el-form :model="form" :rules="rules" ref="loginForm">
        <div class="login-form-header">
          <p>خوش آمدید</p>
          <path>با استفاده از نام کاربری و رمز عبور ارسال شده وارد شوید.</path>
        </div>

        <div class="login-form-input">
          <el-form-item prop="phoneNumber">
            <el-input v-model="form.phoneNumber" placeholder="شماره تلفن"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="رمز عبور" type="password" show-password></el-input>
          </el-form-item>
        </div>

        <div class="login-form-footer">
          <div>
            <el-button @click="handleLogin" :loading="loading" type="primary">ورود</el-button>
            <p class="add-account" @click="handleAddAccount">حساب کاربری ندارید؟</p>
          </div>
          <p>رمز عبور خود را فراموش کرده ام</p>
        </div>
      </el-form>
      <div class="login-img">
        <img src="/public/images/login.svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useAppStore } from '~/stores/app'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import type { ElForm } from 'element-plus'

const loginStore = useAuthStore()
const { phoneNumber, password } = storeToRefs(loginStore)
const { appLoading } = storeToRefs(useAppStore())
const router = useRouter()

// ///////////////////////////////// States
const form = ref({
  phoneNumber: '',
  password: ''
})
const loading = ref(false)
const loginForm = ref<InstanceType<typeof ElForm> | null>(null)

// /////////////////////////////// Validation rules
const rules = {
  phoneNumber: [{ required: true, message: '', trigger: 'blur' }],
  password: [{ required: true, message: '', trigger: 'blur' }]
}

// //////////////////////////////Page meta
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

// ////////////////////////////// Methods
const handleLogin = async () => {
  if (loginForm.value) {
    loginForm.value.validate(async (valid: boolean) => {
      if (valid) {
        loginStore.phoneNumber = form.value.phoneNumber
        loginStore.password = form.value.password
        appLoading.value = true
        try {
          await loginStore.login()
          router.push({ name: 'index' })
        } catch (err) {
          appLoading.value = false
        }
        setTimeout(() => {
          appLoading.value = false
        }, 1000)
      }
    })
  }
}

const handleAddAccount = () => {
  router.push({ name: 'register' })
}
</script>

<style lang="scss">
@import '/assets/scss/pages/auth/login.scss';
</style>
