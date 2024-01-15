<template>
    <aside class="sidebar">
        <button
            v-for="(item, index) in chapters"
            :key="index"
            :class="{'_active' : item.id === currentChapter}"
            @click="changeChapter(item.id)"
        >
            {{ item.name }}
        </button>
    </aside>
</template>

<script setup>
import {defineEmits, defineProps} from "vue";

// eslint-disable-next-line
const props = defineProps({
    chapters: {
        type: Object,
        default: () => {}
    },
    currentChapter: {
        type: String,
        default: 'diplomas'
    },
})
const emit = defineEmits('changeChapter')

const changeChapter = (id) => emit('changeChapter', id)
</script>

<style scoped lang="scss">
.sidebar {
    position: fixed;
    left: 40px;
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 15px;
    gap: 10px;
    background-color: #eee;
    border-radius: 10px;

    button {
        padding: 10px;
        border: none;
        border-radius: 10px;
        text-decoration: none;
        color: #000;
        transition: .3s ease;
        text-align: left;
        cursor: pointer;

        &._active,
        &:hover {
            background-color: $primary;
            color: #fff;
        }
    }
}
</style>
