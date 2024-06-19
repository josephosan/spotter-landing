<template>
    <el-dialog v-model="phoneSidebarOpen" :fullscreen="true" :show-close="false">
        <template #header>
            <el-icon size="large" @click="phoneSidebarOpen = false">
                <Close />
            </el-icon>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app';
import { Close } from '@element-plus/icons-vue'

const { phoneSidebarOpen } = storeToRefs(useAppStore())
</script>