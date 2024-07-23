<template>
  <div class="product-page-navigator" :class="[isSingleProductNavigatorStick && 'sticky-navigator']">
    <div
      class="item"
      v-for="s in navigator"
      :key="s.key"
      @click="itemClick(s.key)"
      :class="[activeNavigator === s.key && 'active']"
    >
      {{ s.value }}
    </div>
  </div>
</template>

<script setup lang="ts">
import config from '~/assets/staticData/config'
import { useAppStore } from '~/stores/app'

const { isSingleProductNavigatorStick } = storeToRefs(useAppStore())

const navigator = config.dashboard.singleProduct.navigator

// ////////////////////////////// emits
const emit = defineEmits(['navItemClick'])

// ////////////////////////////// props
const props = defineProps({
  activeSection: {
    type: String,
    required: true
  }
})

// ////////////////////////////// states
const activeNavigator = ref('preview')

// ////////////////////////////// watchers
watch(
  () => props.activeSection,
  (newVal) => {
    activeNavigator.value = newVal
  }
)

// ////////////////////////////// methods
const itemClick = (s: string) => {
  activeNavigator.value = s
  emit('navItemClick', s)
}

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
