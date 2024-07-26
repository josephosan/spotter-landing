import { defineStore } from 'pinia'
import type { ISettings } from '~/typescript/interfaces/fetch'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    settings: null as null | ISettings
  }),
  actions: {
    getSettings() {
      const { $axios } = useNuxtApp()

      return new Promise((resolve, reject) => {
        $axios
          .get('setting/all')
          .then(({ data }) => {
            this.settings = data.settings
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    updateSettings(payload: ISettings) {
      const { $axios } = useNuxtApp()

      return new Promise((resolve, reject) => {
        $axios
          .patch('setting', payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})
