<template>
    <div class="smart-filter">
      <el-collapse v-model="activeNames">
        <el-collapse-item v-for="item in filters" :key="item.title" :name="item.title" :title="item.title">
          <div class="p-1" v-if="typeof item.filter === 'string'">
            <el-input :placeholder="item.filter"/>
          </div>
          <div class="p-3" v-else>
            <div v-if="item.filter.length > 3">
              <div v-for="f in item.filter" :key="f">
                <el-checkbox :label="f" size="small" />
              </div>
            </div>
            
            <div v-else class="d-flex">
              <el-radio-group class="ml-4 flex-column d-flex">
                <el-radio v-for="f, index in item.filter" :value="index + 1">{{ f }}</el-radio>
              </el-radio-group>
            </div>
          </div>
        </el-collapse-item>
    </el-collapse>
    </div>
</template>

<script setup lang="ts">
import config from '~/assets/staticData/config';


// ////////////////////////////////// states
const activeNames = ref(['بر اساس عنوان آموزش'])

// ////////////////////////////////// constants
const { filters } = config.dashboard
</script>

<style lang="scss">
@import '/assets/scss/components/shared/smart-filter.scss';
</style>