<template>
  <div class="phone-sidebar">
    <el-dialog v-model="phoneSidebarOpen" :fullscreen="true" :show-close="false">
      <template #header>
        <el-icon size="large" @click="phoneSidebarOpen = false">
          <Close />
        </el-icon>
      </template>

      <div class="body">
        <div class="buttons">
          <el-button>{{ navButtons.normal.title }}</el-button>
          <el-button @click="$router.push({ name: navButtons.primary.route })" type="primary">{{ navButtons.primary.title }}</el-button>
        </div>

        <div class="menu">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item v-for="(page, index) in navPages" :index="index + ''">
              <span>{{ page.title }}</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app'
import { Close } from '@element-plus/icons-vue'
import config from '~~/assets/staticData/config'

const { phoneSidebarOpen } = storeToRefs(useAppStore())
const navButtons = config.default.nav.buttons
const navPages = config.default.nav.pages
</script>

<style lang="scss">
@import '/assets/scss/components//sidebar/phone-sidebar.scss';
</style>
