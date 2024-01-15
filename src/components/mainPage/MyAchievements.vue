<template>
    <div class="achieve container">
        <h2>Мои достижения</h2>
        <section class="achieve-list">
            <article
                v-for="(item, index) in items"
                :key="index"
                @click="goToPortfolio(item.id)"
                class="achieve-list-item item"
            >
                <div class="item-img__wrapper">
                    <img style="fill: green;"
                         :src="'images/myAchievements/' + item.src"
                         :alt="item.title"
                    >
                </div>
                <h3 class="item-title">{{ item.title }}</h3>
                <p class="item-desc">{{ item.text }}</p>
            </article>
        </section>
    </div>
</template>

<script setup>
import router from "../../router";
import {useStore} from "vuex";

const store = useStore()

const items = [
    {
        id: 'diplomas',
        src: 'diplom.svg',
        title: 'Дипломы',
        text: 'Индивидуальные достижения студентов в региональных чемпионатах, олимпиадах и конкурсах.'
    },
    {
        id: 'certificates',
        src: 'certificate.svg',
        title: 'Сертификаты',
        text: 'Участие студентов в региональных чемпионатах, олимпиадах и конкурсах.'
    },
    {
        id: 'qualifications',
        src: 'pen.svg',
        title: 'Повышение квалификации',
        text: 'Обновление теоретических и практических знаний, совершенствование навыков специалиста.'
    },
    {
        id: 'appreciations',
        src: 'appreciation.svg',
        title: 'Благодарности',
        text: 'Благодарственные письма за подготовку победителей, участие в жюри, участие в региональных чемпионатах в качестве эксперта.'
    },
]

const goToPortfolio = (id) => {
    store.commit('portfolio/changeActiveChapter', (id))
    router.push('/portfolio')
}
</script>

<style lang="scss">
.achieve {
    display: flex;
    flex-direction: column;
    padding: 150px 15px;
    gap: 110px;

    &-list {
        display: flex;
        gap: 45px;

        .item {
            display: flex;
            flex-direction: column;
            max-width: 24%;
            width: 100%;
            padding: 32px 32px 28px 32px;
            border-bottom: 4px solid $base-light;
            gap: 25px;
            background-color: $base-light;
            border-radius: 10px;
            text-decoration: none;
            word-break: break-all;
            transition: all .3s;
            cursor: pointer;

            &:hover {
                border-color: $primary;

                .item-desc {
                    color: $dark-primary-secondary;
                }
            }

            &-img__wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 80px;
                height: 80px;
                padding: 10px;
                background-color: #FFFFFF;
                border-radius: 10px;
                box-shadow: 0px 0px 6px rgba(61, 61, 61, 0.5);
            }

            &-title {
                color: $dark-primary;
            }

            &-desc {
                color: $dark-primary;
                transition: all .3s;
            }
        }
    }
}
</style>
