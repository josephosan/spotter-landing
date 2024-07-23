import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  if (authStore.isLoggedIn) {
    if (to?.name?.toString()?.includes('auth')) return navigateTo('/')
    else return true
  } else {
    if (!to?.name?.toString()?.includes('auth')) return navigateTo('/auth/login')
    else return true
  }
})
