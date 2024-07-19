<template>
  <div>
    <div>test page</div>
    <collapseList :items="items" :accordion="false" @change="handleCollapseChange" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    title: 'موضوع۱',
    description: 'توضیحات۱'
  },
  {
    title: 'موضوع۲',
    description: 'توضیحات۲'
  }
])

const handleCollapseChange = () => {
  console.log('collapse is ok')
}
</script>
