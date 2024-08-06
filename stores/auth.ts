import { defineStore } from 'pinia'
import { useAppStore } from './app'
import { type AuthState } from '~/typescript/interfaces/app'

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isLoggedIn: false,
    phoneNumber: null,
    password: null,
    accessToken: null,
    refreshToken: null,
    register: {
      firstName: null,
      lastName: null,
      gender: null,
      phoneNumber: null,
      password: null,
      otpCode: null
    }
  }),
  actions: {
    setAuthToken(tokens: { accessToken: null | string; refreshToken: null | string }) {
      const { $config } = useNuxtApp()
      const token = useCookie($config.public.ACCESS_TOKEN_NAME)
      const refresh = useCookie($config.public.REFRESH_TOKEN_NAME)

      token.value = this.accessToken = tokens.accessToken
      refresh.value = this.refreshToken = tokens.refreshToken
    },

    clearTokens() {
      this.setAuthToken({ accessToken: null, refreshToken: null })
    },

    // ////////////////////////// login request
    login() {
      const { $axios } = useNuxtApp()

      const payload = {
        phoneNumber: this.phoneNumber,
        password: this.password
      }

      return new Promise((resolve, reject) => {
        $axios
          .post('user/account/auth/login', payload)
          .then(({ data }) => {
            this.setAuthToken(data)
            this.isLoggedIn = true
            resolve(data)
          })
          .catch((err) => {
            this.clearTokens()
            reject(err)
          })
      })
    },

    // ////////////////////////// logout request
    logout() {
      const { $config, $notification } = useNuxtApp()
      const { appLoading } = storeToRefs(useAppStore())

      appLoading.value = true
      const router = useRouter()

      const token = useCookie($config.public.ACCESS_TOKEN_NAME)
      this.isLoggedIn = false
      token.value = null

      router.push({ name: 'auth-login' })

      setTimeout(() => {
        appLoading.value = false
        $notification('success', 'موفق', 'با موفقیت خارج شدید!')
      }, 1000)
    },

    // ////////////////////////// register request
    registerAction() {
      const { $axios } = useNuxtApp()

      const payload = {
        otpCode: this.register.otpCode?.split('').reverse().join(''),
        phoneNumber: this.register.phoneNumber,
        firstName: this.register.firstName,
        lastName: this.register.lastName,
        gender: this.register.gender,
        password: this.register.password
      }

      return new Promise((resolve, reject) => {
        $axios.post('user/account/register', payload).catch((err) => {
          reject(err)
        })
      })
    },

    // ////////////////////////// verify otpcode request
    verify() {
      const { $axios } = useNuxtApp()

      const payload = {
        phoneNumber: this.register.phoneNumber
      }

      return new Promise((resolve, reject) => {
        $axios.post('user/account/verify', payload).catch((err) => {
          reject(err)
        })
      })
    }
  }
})
