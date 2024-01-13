<template>
    {{ textarea.label }}
</template>

<script setup>
import { defineProps } from 'vue';

// eslint-disable-next-line
const props = defineProps({
    textarea: {
        type: Object,
        default: () => {}
    }
})
</script>

<style scoped lang="scss">

</style>