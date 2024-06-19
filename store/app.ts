import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        phoneSidebarOpen: false as boolean
    })
})