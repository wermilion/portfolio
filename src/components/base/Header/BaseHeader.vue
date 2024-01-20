<template>
    <header class="header">
        <div class="container">
            <div v-if="false" class="header-items">
                <nav class="nav">
                    <router-link v-for="(item, index) in navLinks" :key="index" :to="item.path"
                        :class="['nav-item', { '_active': item.isActive }]">
                        {{ item.label }}
                    </router-link>
                </nav>
                <UIButton label="Связаться со мной" class="ghost" @click="changeVisibility" />
            </div>
            <button @click="changeMenuState" :class="['burger-menu', { 'is-active' : menuIsActive }]">
                <div class="burger-menu__line first"></div>
                <div class="burger-menu__line second"></div>
                <div class="burger-menu__line third"></div>
            </button>
        </div>
    </header>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue';
import UIButton from '@/components/ui/Button/UIButton.vue';

const store = useStore();
const route = useRoute();

const navLinks = ref([
    { path: "/", label: "Главная", isActive: false },
    { path: "/portfolio", label: "Портфолио", isActive: false },
    { path: "/about", label: "Обо мне", isActive: false },
])
const menuIsActive = ref(false)

const changeMenuState = () => {
    menuIsActive.value = !menuIsActive.value
}

const changeVisibility = () => {
    store.commit('MainData/changeModalVisibility')
}

// Выполняется при монтировании компонента
onMounted(() => {
    navLinks.value.forEach((el) => {
        el.isActive = el.path === route.path;
    })
});

// Следим за изменениями маршрута
watch(route, (to) => {
    navLinks.value.forEach((el) => {
        el.isActive = el.path === to.path;
    })
});
</script>

<style scoped lang="scss">
.header {
    position: sticky;
    top: 0;
    width: 100%;
    padding: 25px 0;
    background-color: white;
    box-shadow: 0 5px 80px 0 rgba(0, 0, 0, 0.10);
    z-index: 999;

    &-items {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav {
        display: flex;
        gap: 42px;


        &-item {
            padding: 18px 0;
            color: $dark-primary-secondary;
            text-decoration: none;
            transition: all .3s;

            &:hover {
                color: $primary;
            }

            &._active {
                color: $primary;
            }
        }
    }

    .burger-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-left: auto;
        min-height: 15px;
        height: 16px;
        width: 20px;
        border: none;
        background: transparent;
        cursor: pointer;

        &__line {
            width: 100%;
            border-top: 2px solid $primary;
        }

        &.is-active {
            justify-content: center;
            .first {
                position: relative;
                transition: 0.3s ease;
                transform: rotate(45deg), translateY(2px);
            }

            .third {
                position: relative;
                transition: 0.3s ease;
                transform: rotate(-45deg);
            }

            .second {
                display: none;
            }
        }
    }
}
</style>
