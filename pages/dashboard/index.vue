<template>
    <div class="dashboard-page">
      <div class="filters">
        <SmartFilters />
      </div>


      <div class="body">
        <ProductCardV2 
          :card-data="{
            title: 'Title',
            desc: 'This is a desc',
            img: '/images/test-image.jpg'
          }"
        />
      </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<style lang="scss">
@import '/assets/scss/pages/dashboard/dashboard-page.scss';
</style>