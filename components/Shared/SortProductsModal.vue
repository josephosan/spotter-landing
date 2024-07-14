<template>
    <el-dialog
        v-model="visible"
    >
        <div class="d-flex">
            <el-radio-group class="d-flex gap-3">
                <el-radio v-for="f, index in sort" :value="index + 1">{{ f }}</el-radio>
            </el-radio-group>
        </div>
    </el-dialog>
</template>

<script setup lang="ts">
import config from '~/assets/staticData/config'

// /////////////////////// props
const props = defineProps({
    modelValue: Boolean
})

// /////////////////////// emits
const emit = defineEmits(['update:modelValue'])

// /////////////////////// constants
const sort = config.dashboard.sort

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