<template>
  <div class="comments-container">
    <el-collapse class="el-collapse">
      <el-collapse-item v-for="(item, index) in commentsData" :key="index">
        <template #title>
          <div class="collapse-title">
            <div class="collapse-title-user">{{ item.title.numberOfUsers }} نظر</div>
            <div class="vertical-line"></div>
            <div class="collapse-title-average">
              <el-icon :size="25" color="rgb(255, 165, 0, 1)"><StarFilled /></el-icon>
              <span>{{ item.title.averageUserRating }} (میانگین امتیاز کاربران)</span>
            </div>
          </div>
        </template>

        <div v-for="(comment, commentIndex) in item.comments" :key="commentIndex" class="comment-card">
          <el-card class="comment-card-content" shadow="never">
            <div class="comment-header">
              <div class="comment-profile">
                <img :src="comment.profileImage" alt="Profile Image" class="profile-image" />
                <span class="commenter-name">{{ comment.name }}</span>
              </div>

              <span class="comment-date">{{ comment.date }}</span>
            </div>
            <p class="comment-description">{{ comment.description }}</p>
          </el-card>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { StarFilled } from '@element-plus/icons-vue'
import { type IComment } from '~/typescript/interfaces/app'

// ///////////////////////// props
const props = defineProps({
  commentsData: {
    type: Array as PropType<IComment[]>,
    required: true
  }
})

// ////////////////////////////////// constants
const commentsData = ref(props.commentsData)
</script>

<style scoped>
@import '/assets/scss/components/shared/comments.scss';
</style>
