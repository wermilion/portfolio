<template>
    <div class="about container">
        <img
            class="about-img"
            :src="aboutBlock.img"
            :alt="aboutBlock.title"
        >
        <div class="about-text-content">
            <h2>{{ aboutBlock.title }}</h2>
            <p class="about-desc" v-html="aboutBlock.description"></p>
            <router-link
                class="about-more"
                to="/about"
            >
                Узнать подробнее...
            </router-link>
        </div>
    </div>
</template>

<script setup>
import {reactive} from 'vue'

const aboutBlock = reactive({
    title: 'Обо мне',
    description: 'Привет, меня зовут Анна! С 2008 года являюсь преподавателем IT в Томском экономико-промышленном колледже, а также экспертом по компетенции «Автоматизация бизнес-процессов организаций».<br><br>Имею опыт программирования в 1С, Visual Studio, MySQL, phpMyAdmin, работала с различными системами учета, взаимодействовала с контролирующими и проверяющими органами.',
    img: 'images/about/students.jpg'
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
        border-radius: 10px;
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

    &-more {
        text-decoration: none;
        font-weight: 700;
        color: $dark-primary-secondary;
        transition: color .3s;

        &:hover {
            color: $primary;
        }
    }
}
</style>
