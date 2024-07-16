<template>
  <div class="single-product">
    <ProductPageNavigator />

    <div class="d-flex justify-content-center w-100">
      <div class="product-wrapper" :class="[isSingleProductNavigatorStick && 'scrolled']">
        <div class="course-content">
          <div class="video-box">video</div>
          <div class="description">
            <div class="value" :class="[!descriptionShowMore && 'show-less']">
              <h1>اکسل (Microsoft Office Excel) چیست؟</h1>
              <p>
                اکسل یک نرم‌افزار صفحه‌ گسترده است. با استفاده از این نرم‌افزار می‌توان اعداد، فرمول‌ها و داده‌های دیگر
                را در قالب جداول یا نمودارهای گوناگون مدیریت کرد.
              </p>

              <h2>اهمیت یادگیری اکسل چیست؟</h2>
              <p>
                از داده‌ها به عنوان یک ابزار قدرتمند برای تصمیم‌گیری، پیش‌بینی و تحلیل استفاده می‌شود. اکسل به عنوان یکی
                از قدرتمندترین ابزارهای محاسباتی و تجزیه‌وتحلیل داده‌ها، به کاربران امکان می‌دهد تا از داده‌ها به بهترین
                شکل ممکن استفاده کنند.
              </p>
              <p>
                با یادگیری اکسل، مدیریت دقیق داده‌ها، ایجاد فرمول‌های پیچیده، رسم نمودار و گزارش‌گیری دقیق، تسریع در
                فرایند کاری و… را به دست می‌آوریم.
              </p>
              <p>
                اکسل قابلت تنظیم و تغییر زیادی دارد و با توجه به گستردگی ابزارهای گنجانده‌شده در آن، در تمام محیط‌های
                کاری، تحصیلی و حتی زندگی شخصی، که به نوعی با دسته‌بندی و تحلیل داده‌ها، بانک‌های اطلاعاتی یا گزارش‌گیری
                سروکار دارند، کاربرد دارد.
              </p>

              <h3>مزایای اکسل:</h3>
              <ul>
                <li>نرم‌افزاری سریع و ارزان قیمت</li>
                <li>انجام خودکار عملیات‌ تکراری</li>
                <li>استخراج گزارش‌های سریع‌تر و ساده‌تر از داده‌های پیچیده برای مدیران سازمان</li>
                <li>ابزارهای کوچک کاربردی برای انجام کارهای روزمره</li>
                <li>محاسبات مهندسی، آماری، حسابداری و مالی، فرمول‌نویسی، کنترل پروژه و ترسیم نمودارهای متنوع</li>
              </ul>

              <h2>در این فرادرس چه چیزی یاد می‌گیریم؟</h2>
              <p>
                در این فرادرس پس از معرفی اکسل و شیوه ورود اطلاعات به آن، توابع، فانکشن‌ها، استایل‌ها، تصویرسازی و
                Editing ارائه می‌شود. در ادامه به معرفی Print ،Page Layout ،View & Linking، توابع، ماکرو، زبانه Data و
                ترسیم نمودارها پرداخته و در انتها Pivot Tables، تحلیل حساسیت و Scenario مطرح می‌شود.
              </p>

              <h3>مفید برای</h3>
              <ul>
                <li>مهندسین صنایع</li>
                <li>حسابداری</li>
              </ul>

              <h3>سرفصل‌ها</h3>
              <ol>
                <li>
                  <h4>درس یکم: معرفی نرم افزار Excel</h4>
                  <ul>
                    <li>معرفی نرم افزار و کاربردها و ویژگی های نرم افزار</li>
                    <li>معرفی زبانه ها و نوار ابزار</li>
                    <li>Auto Fill</li>
                  </ul>
                </li>
                <li>
                  <h4>درس دوم: ورود اطلاعات در نرم افزار اکسل</h4>
                  <ul>
                    <li>پیکره بندی اطلاعات</li>
                    <li>معرفی Format Cells</li>
                    <li>معرفی Insert</li>
                  </ul>
                </li>
                <li>
                  <h4>درس سوم: توابع، فانکشن ها و استایل ها</h4>
                  <ul>
                    <li>توابع پرکاربرد مانند جمع، میانگین و ...</li>
                    <li>معرفی AutoSum</li>
                    <li>معرفی گروه Styles</li>
                    <li>معرفی Insert Slicer</li>
                  </ul>
                </li>
                <li>
                  <h4>درس چهارم: تصویرسازی (شکل ها، چارت ها) و Editing</h4>
                  <ul>
                    <li>معرفی زبانه Insert</li>
                    <li>تصویرسازی با استفاده از اشکال</li>
                    <li>ایجاد نمودارها</li>
                    <li>ایجاد چارت ها</li>
                    <li>معرفی گروه Editing</li>
                  </ul>
                </li>
                <li>
                  <h4>درس پنجم: معرفی Print ،Page Layout و ترسیم نمودارها</h4>
                  <ul>
                    <li>تنظیمات صفحات برای پرینت</li>
                    <li>گروه ها در زبانه Page Layout</li>
                    <li>معرفی Page Setup</li>
                    <li>معرفی Sheet Option</li>
                    <li>ترسیم نمودارها</li>
                  </ul>
                </li>
                <li>
                  <h4>درس ششم: معرفی View & Linking</h4>
                  <ul>
                    <li>معرفی زبانه View</li>
                    <li>معرفی تنظیمات مختلف در گروه های زبانه View</li>
                    <li>تنظیمات در Sheet ها</li>
                    <li>Link کردن Sheet ها</li>
                  </ul>
                </li>
                <li>
                  <h4>درس هفتم: معرفی توابع و ماکرو</h4>
                  <ul>
                    <li>معرفی تابع IF</li>
                    <li>معرفی IF تو در تو</li>
                    <li>معرفی تابع VLOOKUP, HLOOKUP</li>
                    <li>معرفی تابع COUNTIFS, COUNTIF, COUNT</li>
                    <li>معرفی توابع SUM, SUMIF, SUMIFS</li>
                    <li>معرفی تابع AVERAGE, AVERAGEIF, AVERAGEIFS</li>
                    <li>ایجاد ماکرو و اجرای آن</li>
                  </ul>
                </li>
                <li>
                  <h4>درس هشتم: معرفی زبانه Data</h4>
                  <ul>
                    <li>معرفی بخش Data Tools</li>
                    <li>معرفی بخش SUBTOTAL</li>
                  </ul>
                </li>
                <li>
                  <h4>درس نهم: Pivot Tables</h4>
                  <ul>
                    <li>معرفی Pivot Tables</li>
                    <li>ایجاد Pivot Tables</li>
                    <li>Slicer ها در Pivot Tables</li>
                    <li>معرفی Pivot Chart</li>
                  </ul>
                </li>
                <li>
                  <h4>درس دهم: تحلیل حساسیت و Scenario</h4>
                  <ul>
                    <li>معرفی گروه Forecast</li>
                    <li>معرفی تابع Forecast</li>
                    <li>معرفی و فراخوانی Solver</li>
                    <li>معرفی و ایجاد و فراخوانی Scenario ها</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div class="button" v-if="!descriptionShowMore">
              <el-button @click="descriptionShowMore = true">
                <el-icon><ArrowDown /></el-icon> مشاهده بیشتر
              </el-button>
            </div>
          </div>
        </div>
        <div class="summary-box">
          <div class="box" :class="[isSingleProductNavigatorStick && 'scrolled']">
            <h2 class="title">Microsoft Office Excel 2016</h2>
            <div class="price">
              <span class="title">هزینه آموزش</span>
              <span class="value">۴۹۹,۰۰۰ تومان</span>
            </div>
            <div class="buy">
              <el-button type="primary" size="large" class="shop">
                <el-icon><ShoppingCart /></el-icon> افزودن به سبد سفارش
              </el-button>
              <el-button size="large" class="like">
                <el-icon><Plus /></el-icon>
              </el-button>
            </div>
            <div class="student-count">
              <div class="title">تعداد دانشجو</div>
              <div class="value">۵۳,۱۸۷ نفر</div>
            </div>
            <div class="duration">
              <div class="title">مدت زمان</div>
              <div class="value">۹ ساعت و ۱۱ دقیقه</div>
            </div>
            <hr class="line" />
            <div class="footer">
              <el-icon><SuitcaseLine /></el-icon>
              <div class="content">
                <span class="title">۲۰,۰۲۳+ فرصت‌ شغلی مرتبط</span>
                <span class="subtitle">در مطرح‌ترین سایت‌های کاریابی</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SingleProductStickySummaryFooter />
  </div>
</template>

<script setup lang="ts">
import { ShoppingCart, Plus, SuitcaseLine, ArrowDown } from '@element-plus/icons-vue'
import { useAppStore } from '~/store/app'

const { isSingleProductNavigatorStick } = storeToRefs(useAppStore())

// //////////////////////////////// states
const descriptionShowMore = ref(false)

definePageMeta({
  layout: 'dashboard'
})
</script>

<style lang="scss">
@import '/assets/scss/pages/dashboard/single-product.scss';
</style>
