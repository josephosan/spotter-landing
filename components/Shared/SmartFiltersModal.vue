<template>
    <el-dialog
        v-model="visible"
        :fullscreen="true"
        class="smart-filter-modal"
    >
        <div class="wrapper">
            <SmartFilters />
        </div>
    </el-dialog>
</template>

<script setup lang="ts">

// /////////////////////// props
const props = defineProps({
    modelValue: Boolean
})

// /////////////////////// emits
const emit = defineEmits(['update:modelValue'])


// /////////////////////// computed
const visible = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})

</script>

<style lang="scss">
@import '/assets/scss/components/shared/smart-filter-modal.scss';
</style>