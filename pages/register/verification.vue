<template>
  <div class="otp-box">
    <div class="otp-form">
      <div class="otp-header">
        <p>تایید درخواست</p>
        <path>کد شش رقمی ارسال شده از طریق پیامک را وارد نمایید</path>
      </div>
      <div class="otp-input">
        <input
          v-for="(digit, index) in otpDigits"
          :key="index"
          v-model="otpDigits[index]"
          @input="handleInput($event, index)"
          @keydown.backspace="handleBackspace($event, index)"
          maxlength="1"
          type="text"
          class="otp-inputs"
          :ref="'otpInput' + index"
        />
      </div>

      <div class="otp-footer">
        <el-button type="primary" @click="handleClick" :loading="loading">ارسال</el-button>
        <p :class="{ 'resend-active': canResend }" @click="resendCode">
          ارسال مجدد کد
          <span v-if="!canResend">({{ minutes }}:{{ seconds < 10 ? '0' : '' }}{{ seconds }})</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRegisterStore } from '~/stores/register'
import { useRouter } from 'vue-router'
import { ref, onMounted, nextTick } from 'vue'

const registerStore = useRegisterStore()
const { appLoading } = storeToRefs(useAppStore())

// ////////////////////////////////////////// page meta
definePageMeta({
  layout: 'auth'
})

// ////////////////////////////////////////// states
const loading = ref(false)
const otpDigits = ref(Array(6).fill(''))
const minutes = ref(3)
const seconds = ref(0)
const canResend = ref(false)
let timer = null

const router = useRouter()

// ////////////////////////////////////////// methods

const startTimer = () => {
  timer = setInterval(() => {
    if (seconds.value === 0) {
      if (minutes.value === 0) {
        canResend.value = true
        clearInterval(timer)
      } else {
        minutes.value--
        seconds.value = 59
      }
    } else {
      seconds.value--
    }
  }, 1000)
}

const handleInput = (event, index) => {
  const value = event.target.value
  if (/^\d$/.test(value)) {
    otpDigits.value[index] = value
    focusNextInput(index - 1)
  }
}

const handleBackspace = (event, index) => {
  if (event.key === 'Backspace' && !otpDigits.value[index] && index > 0) {
    focusNextInput(index - 1)
  }
}

const focusNextInput = (index) => {
  nextTick(() => {
    const input = document.querySelector(`.otp-inputs:nth-child(${index + 1})`)
    if (input) {
      input.focus()
    }
  })
}

const handleClick = async () => {
  appLoading.value = true
  registerStore.otpCode = otpDigits.value.join('')

  try {
    await router.push('/auth/login')
    registerStore.register()
  } catch (err) {
    appLoading.value = false
  }
  setTimeout(() => {
    appLoading.value = false
  }, 1000)
}

const resendCode = async () => {
  if (canResend.value) {
    appLoading.value = true
    try {
      await registerStore.verify()
      canResend.value = false
      minutes.value = 3
      seconds.value = 0
      startTimer()
    } catch (err) {
      appLoading.value = false
    }
    setTimeout(() => {
      appLoading.value = false
    }, 1000)
  }
}

// ////////////////////////////// hooks
onMounted(() => {
  focusNextInput(5)
  startTimer()
})
</script>

<style scoped>
@import '/assets/scss/pages/verification.scss';
</style>
