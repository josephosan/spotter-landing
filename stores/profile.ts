import { defineStore } from 'pinia'
import type { IProfile } from '~/typescript/interfaces/fetch'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: null as null | IProfile
  }),
  actions: {
    getProfile() {
      const { $axios } = useNuxtApp()
      return new Promise((resolve, reject) => {
        $axios
          .get(`account/me`)
          .then(({ data }) => {
            this.profile = data
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})
