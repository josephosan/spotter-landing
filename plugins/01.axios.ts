import axios from 'axios'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin((nuxtApp) => {
  const { $config } = nuxtApp
  const authStore = useAuthStore()

  const instance = axios.create({
    baseURL: $config.public.BASE_URL
  })

  const ignoreNamesForAuth = ['login', 'sign-up']

  const token = useCookie($config.public.ACCESS_TOKEN_NAME)
  const refreshToken = useCookie($config.public.REFRESH_TOKEN_NAME)
  authStore.accessToken = token.value || null
  authStore.refreshToken = refreshToken.value || null

  const headers = {
    Authorization: `Bearer ${token.value}`
  }

  instance.interceptors.request.use((request) => {
    if (!request.headers['Authorization'] && authStore.accessToken)
      request.headers.set('Authorization', `Bearer ${authStore.accessToken}`)

    return request
  })

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    ({ response }) => {
      if (response.data && response.data.message) {
        response.data.message.forEach((ms: string, index: number) => {
          setTimeout(() => {
            ElNotification({ type: 'error', title: 'Error', message: ms })
          }, index * 100)
        })
      }
    }
  )

  return {
    provide: {
      axios: instance
    }
  }
})
