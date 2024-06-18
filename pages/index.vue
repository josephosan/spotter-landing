<template>
    <div class="main-page">
        <div class="preview">
            <div class="right">
                <img class="background" :src="preview.image.background"/>
                <img class="foreground" :src="preview.image.foreground" />
            </div>
            <div class="left">
                left
            </div>
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