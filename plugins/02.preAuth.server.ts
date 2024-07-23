import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(() => {
  const { isLoggedIn, accessToken } = storeToRefs(useAuthStore())
  try {
    if (accessToken.value) {
      isLoggedIn.value = true
    }
  } catch (err) {
    console.log(typeof err === 'string' ? err : 'token error [preAuth]')
  }
})
