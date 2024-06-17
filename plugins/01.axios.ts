import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
    const instance = axios.create()

    return {
        provide: {
            axios: instance
        }
    }
})