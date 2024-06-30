<template>
  <div class="feature-item">
    <div class="icon">
      <slot name="icon" />
    </div>
    <div class="body">
      <div class="title">{{ feature.title }}</div>
      <div class="desc">{{ feature.desc }}</div>
    </div>
    <div class="button">{{ feature.button }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  feature: {
    type: Object as PropType<{ title: string; desc: string; button: string }>,
    required: true
  }
})
</script>

<style lang="scss">
@import '/assets/scss/components/feature/feature-item.scss';
</style>
