<template>
    <div class="main-page">
        <div class="preview">
            <div class="right">
                <img class="background" :src="preview.image.background" />
                <img class="foreground" :src="preview.image.foreground" />
            </div>
            <div class="left">
                <div class="wrapper">
                    <h1>{{ preview.title }}</h1>
                    <h4>{{ preview.subTitle }}</h4>
                    <div class="buttons">
                        <el-button type="primary">{{ preview.primaryButton }}</el-button>
                        <el-button>{{ preview.normalButton }}</el-button>
                    </div>
                    <div class="numbers">
                        <div>
                            <span class="title">{{ preview.numbers.field1.title }}</span>
                            <span>{{ preview.numbers.field1.number }}K+</span>
                        </div>
                        <div>
                            <span class="title">{{ preview.numbers.field2.title }}</span>
                            <span>{{ preview.numbers.field2.number }}K+</span>
                        </div>
                        <div>
                            <span class="title">{{ preview.numbers.field3.title }}</span>
                            <span>{{ preview.numbers.field3.number }}K+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="products">
            
        </div>
    </div>
</template>

<script lang="ts" setup>
import config from '~~/assets/staticData/config'

const preview = config.default.body.preview
</script>

<style lang="scss">
@import '/assets/scss/pages/main-page.scss';
</style>