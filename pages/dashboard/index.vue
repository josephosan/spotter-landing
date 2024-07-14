<template>
    <div class="dashboard-page">
      <!-- modals :: start -->
       <SmartFiltersModal v-model="smartFiltersVisible" />
       <SortProductsModal v-model="sortsVisible" />
       <!-- modal :: end -->

      <div class="mobile-filters">
        <el-button @click="smartFiltersVisible = true">جستجوی پیشرفته <el-icon class="me-2"><Filter /></el-icon></el-button>
        <el-button @click="sortsVisible = true">مرتب سازی  <el-icon class="me-2"><Sort /></el-icon></el-button>
      </div>


      <div class="filters">
        <SmartFilters />
      </div>


      <div class="body">
        <div class="sort-wrapper">
          <SortProducts />
        </div>

        <div class="products">
          <ProductCardV2
            v-for="d in cardMock"
            :key="d.title"
            :card-data="{
              title: d.title,
              desc: d.desc,
              img: d.img
            }"
          />
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { Filter, Sort } from '@element-plus/icons-vue';

// ///////////////////////// define meta
definePageMeta({
  layout: 'dashboard'
})

// ///////////////////////// mock
const cardMock = [
  {
    title: 'Title 1',
    desc: 'This is description 1',
    img: '/images/test-image.jpg'
  },
  {
    title: 'Title 2',
    desc: 'This is description 2',
    img: '/images/test-image.jpg'
  },
  {
    title: 'Title 3',
    desc: 'This is description 3',
    img: '/images/test-image.jpg'
  },
  {
    title: 'Title 4',
    desc: 'This is description 4',
    img: '/images/test-image.jpg'
  },
  {
    title: 'Title 5',
    desc: 'This is description 5',
    img: '/images/test-image.jpg'
  },
  {
    title: 'Title 6',
    desc: 'This is description 6',
    img: '/images/test-image.jpg'
  },
  {
    title: 'Title 7',
    desc: 'This is description 7',
    img: '/images/test-image.jpg'
  },
  {
    title: 'Title 8',
    desc: 'This is description 8',
    img: '/images/test-image.jpg'
  },
  {
    title: 'Title 9',
    desc: 'This is description 9',
    img: '/images/test-image.jpg'
  },
  {
    title: 'Title 10',
    desc: 'This is description 10',
    img: '/images/test-image.jpg'
  }
];

// ///////////////////////// states
const smartFiltersVisible = ref(false)
const sortsVisible = ref(false)
</script>

<style lang="scss">
@import '/assets/scss/pages/dashboard/dashboard-page.scss';
</style>