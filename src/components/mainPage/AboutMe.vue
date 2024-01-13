<template>
    <div class="about container">
        <img 
            class="about-img" 
            :src="aboutBlock.img" 
            :alt="aboutBlock.title"
        >
        <div class="about-text-content">
            <h2>{{ aboutBlock.title }}</h2>
            <p class="about-desc">{{ aboutBlock.description }}</p>
        </div>
    </div>
</template>

<script setup>
import {reactive} from 'vue'

const aboutBlock = reactive({
    title: 'Обо мне',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis.Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.',
    img: 'images/temp/about_me.png'
})
</script>

<style scoped lang="scss">
.about {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 135px 15px;

    &-img {
        max-width: 46.5%;
        width: 100%;
    }
    
    &-text-content {
        display: flex;
        flex-direction: column;
        max-width: 36.8%;
        width: 100%;
        gap: 32px;
    }

    &-desc {
        color: $dark-primary-secondary;
    }
}
</style>