<template>
    <div class="container portfolio">
        <TheSidebar
            :chapters="chapters"
            :currentChapter="store.state.portfolio.activeChapter"
            class="portfolio__sidebar"
            @changeChapter="changeChapter"
        />
        <div class="portfolio__content">
            <transition name="fadeChange">
                <div v-if="currenChapterItems" class="portfolio__items">
                    <div
                        v-for="(item, index) in currenChapterItems"
                        :key="index"
                        class="portfolio__item"
                    >
                        <img :src="'images/portfolio/' + item.src" alt="portfolio item">
                    </div>
                </div>
            </transition>
            <transition name="fadeChange">
                <div v-if="!currenChapterItems" class="portfolio__cap">
                    <h2>По вашему запросу ничего не найдено(</h2>
                </div>
            </transition>
        </div>
    </div>

</template>

<script setup>
import {ref} from "vue";
import TheSidebar from '@/components/portfolioPage/TheSidebar.vue';
import {useStore} from "vuex";

const store = useStore();

// Все бумаги
let items = new Map([
    ['certificates', [
        {src: 'certificates/certificate_Mukhatdisov_WSR.jpg', date: '01.01.2022'},
        {src: 'certificates/certificate_Mukhatdisov_WSR_3_place.jpg', date: '02.02.2022'},
        {src: 'certificates/certificate_professional_21_century.jpeg', date: '03.03.2022'}
    ]],
    ['diplomas', [
        {src: 'diploms/diplom_1C.png', date: '2020 год.'},
        {src: 'diploms/diplom_best_practise.jpg', date: '2020 год.'},
        {src: 'diploms/diplom_best_resource.jpg', date: '2021 год.'},
        {src: 'diploms/diplom_modern_system_1.jpg', date: '2021 год.'},
        {src: 'diploms/diplom_modern_system_2.jpeg', date: '2022 год.'},
        {src: 'diploms/diplom_professional.jpg', date: '2017 год.'},
        {src: 'diploms/diplom_WSR_1.jpg', date: '2021 год.'},
        {src: 'diploms/diplom_WSR_2.jpg', date: '2020 год.'}
    ]],
    ['qualifications', [
        {src: 'qualifications/certificate_Togushchakova_WSR_1_place.jpg', date: '01.01.2022'},
        {src: 'qualifications/qualification_1.jpg', date: '02.02.2022'},
        {src: 'qualifications/qualification_2.jpg', date: '03.03.2022'}
    ]],
    ['appreciations', [
        {src: 'appreciations/appreciation_1.jpg', date: '01.01.2022'},
        {src: 'appreciations/appreciation_2.jpg', date: '02.02.2022'},
        {src: 'appreciations/appreciation_3.jpeg', date: '03.03.2022'}
    ]]
]);
// Все разделы
const chapters = [
    {name: 'Дипломы', id: 'diplomas'},
    {name: 'Сертификаты', id: 'certificates'},
    {name: 'Повышение квалификации', id: 'qualifications'},
    {name: 'Благодарности', id: 'appreciations'},
]
// Элементы текущего раздела
let currenChapterItems = ref()

const changeChapterItems = () => {
    if (store.state.portfolio.activeChapter) {
        currenChapterItems.value = items.get(store.state.portfolio.activeChapter)
    }
}
changeChapterItems()

const changeChapter = (id) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    store.commit('portfolio/changeActiveChapter', id)
    changeChapterItems()
}
</script>

<style scoped lang="scss">
.portfolio {
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding: 40px 15px;

    &__content {
        display: flex;
        flex-direction: column;
        min-height: calc(100vh - 200px);
        max-width: calc(100% - 300px);
        width: 100%;
        padding: 30px;
        gap: 15px;
        border-radius: 10px;
        background-color: #eee;
    }

    &__item {
        display: flex;
        justify-content: center;

        img {
            width: 50%;
        }
    }

    &__cap {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
