import { defineStore } from 'pinia'
import type { ICourseList } from '~/typescript/interfaces/fetch'

export const useProductStore = defineStore('product', {
  state: (): ICourseList => ({
    courses: [],
    hasNext: null,
    hasPrev: null,
    totalItems: null,
    totalPages: null,
    page: null
  }),
  actions: {
    getAllCourses(params: any) {
      const { $axios } = useNuxtApp()

      return new Promise((resolve, reject) => {
        $axios
          .get(`user/course/paginate`, { params })
          .then(({ data }) => {
            this.courses = data.items
            this.hasNext = data.hasNext
            this.hasPrev = data.hasPrev
            this.totalPages = data.totalPages
            this.totalItems = data.totalItems
            this.page = data.page

            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})
