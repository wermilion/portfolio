<template>
    <div class="input-box">
        {{test}}
        <label :for="input.id">{{ input.label }}</label>
        <input type="text" :id="input.id">
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

// eslint-disable-next-line
const props = defineProps({
    input: {
        type: Object,
        default: () =>{}
    }
})
</script>

<style scoped lang="scss">

</style>