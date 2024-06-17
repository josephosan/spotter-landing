<template>
    <div class="app-navbar">
        <div class="right">
            <div class="logo">logo</div>
            <div class="auth">
                <el-button>Sign up</el-button>
                <el-button type="primary">Login</el-button>
            </div>
        </div>
        <div class="left">
            <span v-for="page in navPages" :key="page.title">{{ page.title }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import config from '~~/assets/staticData/config'

// /////////////////////////// constants
const navPages = config.default.nav.pages
</script>

<style lang="scss">
@import '/assets/scss/components/header/app-navbar.scss';
</style>