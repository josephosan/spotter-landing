<template>
  <div class="app-footer">
    <div class="buttons">
      <el-button>{{ footerButtons.normal }}</el-button>
      <el-button type="primary">{{ footerButtons.primary }}</el-button>
    </div>
    <div class="info">
      <span class="name">{{ footerInfo.name }}</span>
      <span class="gmail">{{ footerInfo.gmail }}</span>
      <span class="copyright">{{ footerInfo.copyright }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import config from '~~/assets/staticData/config'

const footerButtons = config.default.footer.buttons
const footerInfo = config.default.footer.info
</script>

<style lang="scss">
@import '/assets/scss/components/footer/app-footer.scss';
</style>
