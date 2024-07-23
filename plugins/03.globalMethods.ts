import { ElNotification } from "element-plus"


export default defineNuxtPlugin((nuxtApp) => {

    const notification = (type: 'success' | 'warning' | 'info' | 'error', title: string, desc: string) => {
        ElNotification({
            title,
            message: desc,
            type
        })
    }

    return {
        provide: {
            notification
        }
    }
})
