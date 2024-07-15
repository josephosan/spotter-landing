<template>
    <div class="bread-crumb">
        <el-breadcrumb :separator-icon="ArrowLeft">

            <div class="item" v-for="({ route, title }, index) in breadCrumbRoute" :key="route">
                <div 
                    class="text" 
                    @click="$router.push({ name: route })" 
                    :class="[
                        breadCrumbRoute.length > index + 1 && 'active',
                        breadCrumbRoute.length > index + 1 && 'cursor-pointer'
                    ]"
                >{{ title }}</div>
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
    if (!route.name) return []
    return routeNames[route.name.toString()]
})
</script>

<style lang="scss">
@import '/assets/scss/components/header/bread-crumb.scss';
</style>