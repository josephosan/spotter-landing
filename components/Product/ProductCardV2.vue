<template>
  <div class="product-card-v2 col-sm col-md-12 col-lg-6 col-xl-4 d-flex justify-content-center align-items-center">
    <div class="image-wrapper">
      <el-image
        class="image"
        :src="cardData.img"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        :initial-index="4"
        fit="cover"
      />
    </div>
    <div class="content">
      <div class="desc">
        {{ cardData.desc }}
      </div>

      <div class="footer">
        <div class="price">{{ cardData.price }} تومان</div>
        <el-button @click="$router.push({ name: 'dashboard-id', params: { id: 1 } })"
          ><el-icon><ShoppingCart /></el-icon
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ShoppingCart } from '@element-plus/icons-vue'
import { type IProductCard } from '~/typescript/interfaces/app'

const props = defineProps({
  cardData: {
    // type: Object as PropType<IProductCard>,
    type: Object as any,
    required: true
  }
})
</script>

<style lang="scss">
@import '/assets/scss/components/product/product-card-v2.scss';
</style>
