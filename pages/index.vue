<template>
  <div class="main-page">
    <div class="preview">
      <div class="right">
        <img class="background" :src="preview.image.background" />
        <img class="foreground" :src="preview.image.foreground" />
      </div>
      <div class="left">
        <div class="wrapper">
          <h1>{{ preview.title }}</h1>
          <h4>{{ preview.subTitle }}</h4>
          <div class="buttons">
            <el-button type="primary" @click="$router.push({ name: 'dashboard' })">{{
              preview.primaryButton
            }}</el-button>
            <el-button>{{ preview.normalButton }}</el-button>
          </div>
          <div class="numbers">
            <div>
              <span class="title">{{ preview.numbers.field1.title }}</span>
              <span>{{ preview.numbers.field1.number }}K+</span>
            </div>
            <div>
              <span class="title">{{ preview.numbers.field2.title }}</span>
              <span>{{ preview.numbers.field2.number }}K+</span>
            </div>
            <div>
              <span class="title">{{ preview.numbers.field3.title }}</span>
              <span>{{ preview.numbers.field3.number }}K+</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="products">
      <div class="input-wrapper">
        <el-input v-model="productSearchInput" placeholder="جستجو میان دوره ها ..." :prefix-icon="Search" />
      </div>
      <div>
        <div class="row justify-content-start card-wrapper">
          <ProductCard v-for="card in productCards" :key="card.title" :card-data="card" />
        </div>
      </div>
    </div>

    <div class="features">
      <div class="title">
        <h1>{{ featuresSection.header.title }}</h1>
        <h2>{{ featuresSection.header.subtitle }}</h2>
      </div>
    </div>

    <div class="body">
      <!-- <FeatureItem v-for="item in featuresSection.items" :key="item.title" :feature="item">
        <template #icon>
          <component :is="item.icon" />
        </template>
      </FeatureItem> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Search, Open, ReadingLamp, Soccer } from '@element-plus/icons-vue'
import FeatureItem from '~/components/Feature/FeatureItem.vue'
import config from '~~/assets/staticData/config'

// //////////////////////// constants
const preview = config.default.body.preview
const productCards = config.default.body.products
const featuresSection = config.default.body.features

// //////////////////////// states
const productSearchInput = ref('')
</script>

<style lang="scss">
@import '/assets/scss/pages/main-page.scss';
</style>
