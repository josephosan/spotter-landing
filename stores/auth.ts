import { defineStore } from 'pinia'
import { useAppStore } from './app'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: true,
    phoneNumber: null as null | string,
    password: null as null | string,
    accessToken: null as null | string,
    refreshToken: null as null | string
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

    login() {
      const { $axios } = useNuxtApp()

      const payload = {
        phoneNumber: this.phoneNumber,
        password: this.password
      }

      return new Promise((resolve, reject) => {
        $axios
          .post('account/auth/login', payload)
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
    }
  }
})
