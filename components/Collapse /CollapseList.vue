<template>
  <el-collapse v-model="activeNames" :accordion="accordion" @change="handleChange">
    <el-collapse-item v-for="(item, index) in items" :key="index" :title="item.title" :name="index">
      <div>{{ item.description }}</div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Collapse } from '~/typescript/interfaces/collapse'

const props = defineProps<{
  items: Collapse[]
  accordion?: boolean
  onChange?: () => void
}>()

const activeNames = ref(['0'])

const handleChange = () => {
  if (props.onChange) {
    props.onChange()
  }
}
</script>

<style scoped></style>
