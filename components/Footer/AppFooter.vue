<template>
  <div class="app-footer">footer</div>
</template>

<style lang="scss">
@import '/assets/scss/components/footer/app-footer.scss';
</style>
<template>
  <div class="app-footer">
    <div class="buttons">
      <el-button>{{ footerbuttons.normal }}</el-button>
      <el-button type="primary">{{ footerbuttons.primary }}</el-button>
    </div>
    <div class="info">
      <p class="name">{{ footerinfo.name }}</p>
      <p class="gmail">{{ footerinfo.gmail }}</p>
      <p class="copyright">{{ footerinfo.copyright }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import '/assets/scss/components/footer/app-footer.scss';
</style>

<script lang="ts" setup>
import config from '~~/assets/staticData/config'

const footerbuttons = config.default.footer.buttons
const footerinfo = config.default.footer.info
</script>
