<template>
    <div class="sort">
        <div class="item">مرتب سازی: </div>
        <div 
            class="item" 
            v-for="s in sort" 
            :key="s" @click="activeSort = s" 
            :class="[activeSort === s && 'active']"
        >
            {{ s }}
        </div>
    </div>
</template>

<script setup lang="ts">
import config from '~/assets/staticData/config'

const sort = config.dashboard.sort

const activeSort = ref('')
</script>

<style lang="scss">
@import '/assets/scss/components/shared/sort.scss';
</style> 