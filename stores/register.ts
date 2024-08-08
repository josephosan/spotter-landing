import { defineStore } from 'pinia'
import { useAppStore } from './app'

export const useRegisterStore = defineStore('register', {
  state: () => ({
    otpCode: null as null | string,
    phoneNumber: null as null | string,
    firstName: null as null | string,
    lastName: null as null | string,
    gender: null as null | 0 | 1,
    password: null as null | string
  }),
  actions: {
    register() {
      const { $axios } = useNuxtApp()

      const payload = {
        otpCode: this.otpCode?.split('').reverse().join(''),
        phoneNumber: this.phoneNumber,
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        password: this.password
      }

      return new Promise((resolve, reject) => {
        $axios.post('user/account/register', payload).catch((err) => {
          reject(err)
        })
      })
    },

    verify() {
      const { $axios } = useNuxtApp()

      const payload = {
        phoneNumber: this.phoneNumber
      }

      return new Promise((resolve, reject) => {
        $axios.post('user/account/verify', payload).catch((err) => {
          reject(err)
        })
      })
    }
  }
})
