<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-links">
                <a
                    v-for="(item, index) in footerLinks"
                    :key="index"
                    :href="item.path"
                    class="footer-link"
                >
                    <span
                        v-if="item.id === 'contact-with-me'"
                        @click="changeVisibility"
                    >
                        {{ item.label }}
                    </span>
                    <span
                        v-else
                    >
                        {{ item.label }}
                    </span>
                </a>
            </div>
            <div class="footer-socials">
                <a
                    v-for="(item, index) in socialNetworks"
                    :key="index"
                    :href="item.path"
                >
                    <img style="width: 32px; height: 32px;" :src="'/images/socials/' + item.src" :alt="item.alt">
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import {useStore} from "vuex";

const footerLinks = [
    { path: "/", label: "Главная", id: "home" },
    { path: "/portfolio", label: "Портфолио", id: "portfolio" },
    { path: "/about", label: "Обо мне", id: "about-me" },
    { path: "#", label: "Связаться со мной", id: "contact-with-me" },
]

const socialNetworks = [
    {src: "vk.svg", path: "https://vk.com/anna_fedorova83", alt: "vk"},
]

const store = useStore();

const changeVisibility = () => {
    store.commit('MainData/changeModalVisibility')
}
</script>

<style scoped lang="scss">
.footer {
    width: 100%;
    padding: 30px 0;
    background-color: $base-light;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-links {
        display: flex;
        align-items: center;
        gap: 40px;
    }

    &-link {
        padding: 18px 0;
        color: $dark-primary-secondary;
        text-decoration: none;
        transition: all .3s;

        &:hover {
            color: $primary;
        }
    }

    &-socials {
        display: flex;
        align-items: center;
        gap: 16px;
    }
}
</style>
