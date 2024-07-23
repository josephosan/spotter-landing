<template>
  <el-form>
    <div class="login">
      <div class="header">
        <h3>خوش آمدید</h3>
        <p>با استفاده از نام کاربری و رمز عبور ارسال شده وارد شوید.</p>
      </div>
      <div>
        <el-input v-model="phoneNumber" placeholder="شماره تلفن"></el-input>
        <el-input v-model="password" placeholder="رمز عبور" type="password" show-password></el-input>
      </div>
      <el-button @click="handleLogin" :loading="loading" type="primary">ورود</el-button>
      <div>
        <p class="forgot">رمز عبور خود را فراموش کرده ام</p>
      </div>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/stores/app'
import { useAuthStore } from '~/stores/auth'

const { login } = useAuthStore()
const { phoneNumber, password } = storeToRefs(useAuthStore())
const { appLoading } = storeToRefs(useAppStore())

const router = useRouter()

// ////////////////////////////////////////// page meta
definePageMeta({
  layout: 'auth'
})

// ////////////////////////////////////////// states
const loading = ref(false)

// ////////////////////////////////////////// methods
const handleLogin = async () => {
  appLoading.value = true
  try {
    await login()
    router.push({ name: 'index' })
  } catch (err) {
    appLoading.value = false
  }
  setTimeout(() => {
    appLoading.value = false
  }, 1000)
}
</script>

<style lang="scss">
@import '/assets/scss/pages/auth/login.scss';
</style>
