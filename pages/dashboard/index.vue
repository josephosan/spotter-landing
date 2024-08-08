<template>
  <div class="dashboard-page">
    <div class="dashboard-box" v-if="loading">
      <el-skeleton :count="6" class="filters" animated>
        <template #template>
          <el-skeleton-item style="width: 300px; height: 50px" />
        </template>
      </el-skeleton>
      <div class="body">
        <!-- filters skeleton when is desktop -->
        <el-skeleton :count="4" class="filters-skeleton" animated>
          <template #template>
            <el-skeleton-item style="width: 100px; height: 50px" />
          </template>
        </el-skeleton>

        <!-- filters skeleton when is mobile  -->
        <el-skeleton :count="2" class="mobile-filters-skeleton" animated>
          <template #template>
            <el-skeleton-item style="width: 140px; height: 50px" />
          </template>
        </el-skeleton>

        <el-skeleton :count="8" class="products" animated>
          <template #template>
            <div
              style="
                display: flex;
                flex-direction: column;
                gap: 10px;
                width: fit-content;
                box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
              "
            >
              <el-skeleton-item variant="image" style="width: 300px; height: 300px" />
              <el-skeleton-item style="width: 120px; height: 30px; margin-bottom: 40px" />
              <div style="display: flex; gap: 10px">
                <el-skeleton-item style="width: 210px; height: 50px" />
                <el-skeleton-item style="width: 80px; height: 50px" />
              </div>
            </div>
          </template>
        </el-skeleton>
      </div>
    </div>
    <div class="dashboard-box" v-else>
      <!-- modals :: start -->
      <SmartFiltersModal v-model="smartFiltersVisible" />
      <SortProductsModal v-model="sortsVisible" />
      <!-- modal :: end -->

      <div
        id="mobile-filters"
        class="mobile-filters"
        :class="[filtersShouldStick && 'sticky-mobile-filters', 'scrolled']"
      >
        <el-button @click="smartFiltersVisible = true"
          >جستجوی پیشرفته <el-icon class="me-2"><Filter /></el-icon
        ></el-button>
        <el-button @click="sortsVisible = true"
          >مرتب سازی <el-icon class="me-2"><Sort /></el-icon
        ></el-button>
      </div>

      <div class="filters">
        <SmartFilters />
      </div>

      <div class="body">
        <div class="sort-wrapper">
          <SortProducts />
        </div>

        <div class="products" :class="[filtersShouldStick && 'scrolled']">
          <ProductCardV2
            v-for="d in courseData.courses"
            :key="d.title"
            :card-data="{
              title: d.title,
              desc: d.shortDescription,
              price: d.price,
              img: d.thumbnailImage.url
                ? d.thumbnailImage.url
                : 'https://via.placeholder.com/300x300?text=No+Image+Available'
            }"
          />
        </div>

        <div class="d-flex justify-content-center align-items-center py-4">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="totalPage"
            @current-change="handlePageChange"
            :current-page="currentPage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { Filter, Sort } from '@element-plus/icons-vue'
import { useAppStore } from '~/stores/app'
import { useProductStore } from '~/stores/product'

// ////////////////////////////// Define meta
definePageMeta({
  layout: 'dashboard'
})

// /////////////////////////////States
const smartFiltersVisible = ref(false)
const sortsVisible = ref(false)
const filtersShouldStick = ref(false)
const filtersShouldGoToTop = ref(false)
const loading = ref(true)
const productStore = useProductStore()
const courseData = ref()
const { appLoading } = storeToRefs(useAppStore())
const currentPage = ref(1)
const totalPage = ref(10)

// ///////////////////////// Params for API call
const params = ref({
  page: currentPage.value
})

const handlePageChange = (page: number) => {
  currentPage.value = page
  params.value.page = page
}

// /////////////////////////  Watch for changes to the page parameter and fetch new course data accordingly
watch(
  () => params.value.page,
  async (newPage) => {
    loading.value = true
    try {
      await productStore.getAllCourses({ page: newPage })
      courseData.value = productStore.$state
    } catch (error) {
      console.error('Error fetching courses from watcher:', error)
    } finally {
      loading.value = false
    }
  }
)

// ///////////////////////////Initial data fetch
onMounted(async () => {
  try {
    await productStore.getAllCourses(params.value)
    courseData.value = productStore.$state
    totalPage.value = courseData.value.totalPages * 10
    console.log(totalPage.value + ' thissifjsadfk')
  } catch (error) {
    console.error('Error fetching courses:', error)
  } finally {
    loading.value = false
  }
})

onMounted(() => {
  const navbarHeight = 70
  const navbarPlusBreadHeight = navbarHeight + 30

  const updateScrollY = () => {
    if (window.scrollY > navbarHeight) {
      filtersShouldStick.value = true

      if (window.scrollY > navbarPlusBreadHeight) {
        filtersShouldGoToTop.value = true
      } else {
        filtersShouldGoToTop.value = false
      }
    } else {
      filtersShouldStick.value = false
      filtersShouldGoToTop.value = false
    }
  }

  window.addEventListener('scroll', updateScrollY)

  ///////////////////////////////Clean up event listener on component unmount
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateScrollY)
  })
})
</script>

<style lang="scss">
@import '/assets/scss/pages/dashboard/dashboard-page.scss';
</style>
