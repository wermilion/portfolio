<template>
  <BaseHeader />
  <router-view/>
  <BaseFooter />
</template>

<script setup>
import BaseHeader from '@/components/base/Header/BaseHeader.vue'
import BaseFooter from '@/components/base/Footer/BaseFooter.vue'
</script>

<style lang="scss">
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>