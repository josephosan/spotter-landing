<template>
  <el-collapse v-model="activeNames" :accordion="accordion" @change="handleChange" class="custom-collapse">
    <el-collapse-item v-for="(item, index) in items" :key="index" :title="item.title" :name="index">
      <div class="description-container">
        <div
          v-for="(desc, descIndex) in item.descriptions"
          :key="descIndex"
          class="description-item"
          @click="navigateTo(desc.url)"
        >
          {{ desc.text }}
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from '#app'
import { type ICollapseItem } from '~/typescript/interfaces/app'

const props = defineProps<{
  items: ICollapseItem[]
  accordion?: boolean
  onChange?: () => void
}>()

const activeNames = ref(['0'])
const router = useRouter()

const handleChange = () => {
  if (props.onChange) {
    props.onChange()
  }
}

const navigateTo = (url: string) => {
  router.push(url)
}
</script>

<style lang="scss">
@import '/assets/scss/components/shared/collapse.scss';
</style>
