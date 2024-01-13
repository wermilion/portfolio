<template>
    <header class="header">
        <div class="container header-items">
            <nav class="nav">
                <a
                    v-for="(item, index) in navLinks"
                    :key="index"
                    :href="item.path"
                    class="nav-item"
                >
                    {{ item.label }}
                </a>
            </nav>
            <UIButton
                label="Связаться со мной"
                class="ghost"
                @click="changeVisibility"
            />
        </div>
    </header>
</template>

<script setup>
import { useStore } from 'vuex';
import UIButton from '@/components/ui/Button/UIButton.vue';

const navLinks = [
    { path: "/", label: "Главная" },
    { path: "/portfolio", label: "Портфолио" },
    { path: "/about", label: "Обо мне" },
]
const store = useStore();

const changeVisibility = () => {
    store.commit('MainData/changeModalVisibility')
}
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
        }
    }
}
</style>
