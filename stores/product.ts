import { defineStore } from 'pinia'
import type { ICourse } from '~/typescript/interfaces/fetch'

export const useProductStore = defineStore('product', {
  state: () => ({
    courses: [] as ICourse[]
  }),
  actions: {
    getAllCourses() {
      const { $axios } = useNuxtApp()

      return new Promise((resolve, reject) => {
        $axios
          .get(`course`)
          .then(({ data }) => {
            this.courses = data
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})
