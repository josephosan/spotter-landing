<template>
  <client-only>
    <NuxtLayout />
  </client-only>
</template>

<script lang="ts" setup>
import { type HTMLAttrs } from '~~/typescript/types/app'

// ////////////////////////////// computed
const themeVariables = computed(() => {
  return { rel: 'stylesheet', type: 'text/css', href: '/css/variables.light.css' }
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