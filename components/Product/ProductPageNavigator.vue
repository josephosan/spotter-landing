<template>
  <div class="product-page-navigator" :class="[isSingleProductNavigatorStick && 'sticky-navigator']">
    <div
      class="item"
      v-for="s in navigator"
      :key="s"
      @click="activeNavigator = s"
      :class="[activeNavigator === s && 'active']"
    >
      {{ s }}
    </div>
  </div>
</template>

<script setup lang="ts">
import config from '~/assets/staticData/config'
import { useAppStore } from '~/store/app'

const { isSingleProductNavigatorStick } = storeToRefs(useAppStore())

const navigator = config.dashboard.singleProduct.navigator

// ////////////////////////////// states
const activeNavigator = ref('')

// ////////////////////////////// hooks
onMounted(() => {
  const navbarHeight = 70
  const navbarPlusBreadHeight = navbarHeight + 30

  const updateScrollY = () => {
    if (window.scrollY > navbarHeight) {
      isSingleProductNavigatorStick.value = true
    } else {
      isSingleProductNavigatorStick.value = false
    }
  }

  window.addEventListener('scroll', updateScrollY)

  // Clean up event listener on component unmount
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateScrollY)
  })
})
</script>

<style lang="scss">
@import '/assets/scss/components/product/product-page-navigator.scss';
</style>
