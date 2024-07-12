<template>
    <div class="bread-crumb">
        <el-breadcrumb :separator-icon="ArrowLeft">
            <div class="item" v-for="(route, index) in breadCrumbRoute" :key="route">
                <div 
                    class="text" 
                    @click="$router.push({ path: route })" 
                    :class="[
                        breadCrumbRoute.length > index + 1 && 'active',
                        breadCrumbRoute.length > index + 1 && 'cursor-pointer'
                    ]"
                >{{ routeNames[route] }}</div>
                <el-icon v-if="breadCrumbRoute.length !== index + 1"><ArrowLeft /></el-icon>
            </div> 
        </el-breadcrumb>
    </div>
</template>

<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue'
import routeNames from '~/assets/staticData/pageTitles'
const route = useRoute()

// //////////////////////////////// computed
const breadCrumbRoute = computed(() => {
    if (!route.name) return ['/']
    return ['/', ...route.name?.toString().split('/')]
})
</script>

<style lang="scss">
@import '/assets/scss/components/header/bread-crumb.scss';
</style>