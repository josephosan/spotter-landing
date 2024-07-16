<template>
  <div class="single-product-sticky-footer">
    <div class="buttons">
      <el-button type="primary" class="shop">
        <el-icon><ShoppingCart /></el-icon> افزودن به سبد سفارش
      </el-button>
      <el-button class="like">
        <el-icon><Plus /></el-icon>
      </el-button>
    </div>

    <div class="price"><span>۴۹۹,۰۰۰ تومان</span></div>
  </div>
</template>

<script setup lang="ts">
import { ShoppingCart, Plus } from '@element-plus/icons-vue'
</script>

<style lang="scss">
@import '/assets/scss/components/product/single-product-sticky-footer.scss';
</style>
