<template>
  <div class="app-navbar">
    <div class="right">
      <img src="/icons/logo.svg" class="logo" />
      <div class="auth">
        <el-button>{{ navButtons.normal.title }}</el-button>
        <el-button @click="$router.push({ name: navButtons.primary.route })" type="primary">{{
          navButtons.primary.title
        }}</el-button>
      </div>
    </div>
    <div class="left">
      <span class="navbar-link" v-for="page in navPages" :key="page.title">{{ page.title }}</span>
      <div class="sidebar-toggle">
        <el-icon @click="phoneSidebarOpen = true">
          <Menu />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import config from '~~/assets/staticData/config'
import { Menu } from '@element-plus/icons-vue'
import { useAppStore } from '~/stores/app'

// /////////////////////////// constants
const navPages = config.default.nav.pages
const navButtons = config.default.nav.buttons

// /////////////////////////// store
const { phoneSidebarOpen } = storeToRefs(useAppStore())
</script>

<style lang="scss">
@import '/assets/scss/components/header/app-navbar.scss';
</style>
