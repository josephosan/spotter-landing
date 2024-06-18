<template>
    <div class="app-navbar">
        <div class="right">
            <img src="/icons/logo.svg" class="logo" />
            <div class="auth">
                <el-button>{{ navButtons.normal.title }}</el-button>
                <el-button type="primary">{{ navButtons.primary.title }}</el-button>
            </div>
        </div>
        <div class="left">
            <span class="navbar-link" v-for="page in navPages" :key="page.title">{{ page.title }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import config from '~~/assets/staticData/config'

// /////////////////////////// constants
const navPages = config.default.nav.pages
const navButtons = config.default.nav.buttons
</script>

<style lang="scss">
@import '/assets/scss/components/header/app-navbar.scss';
</style>