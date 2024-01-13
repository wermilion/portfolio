<template>
  <BaseHeader/>
  <router-view/>
  <BaseFooter/>
  <UIModal/>
</template>

<script setup>
import BaseHeader from '@/components/base/Header/BaseHeader.vue'
import BaseFooter from '@/components/base/Footer/BaseFooter.vue'
import UIModal from '@/components/ui/Modal/UIModal.vue'
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