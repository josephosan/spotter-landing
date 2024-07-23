import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    phoneSidebarOpen: false,
    isSingleProductNavigatorStick: false,
    appLoading: false
  })
})
