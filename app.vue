<template>
  <client-only>
    <NuxtLayout />
  </client-only>
</template>

<script lang="ts" setup>
import { type HTMLAttrs } from '~~/typescript/types/app'
import { useAppStore } from './stores/app'

const route = useRoute()
const { phoneSidebarOpen } = storeToRefs(useAppStore())

// ////////////////////////////// computed
const themeVariables = computed(() => {
  return { rel: 'stylesheet', type: 'text/css', href: '/css/variables.light.css' }
})

const routeName = computed(() => {
  return route.name?.toString()
})

// ////////////////////////////// watchers
watch(routeName, (newVal, oldVal) => {
  if (newVal !== oldVal) phoneSidebarOpen.value = false
})

useHead({
  title: 'Home',
  htmlAttrs: {
    dir: 'rtl',
    lang: 'fa'
  },
  link: () => [themeVariables.value] as HTMLAttrs
})
</script>

<style lang="scss">
@import '/assets/scss/main.scss';
</style>
