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
                    {{ item.label }}
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

const footerLinks = [
    { path: "/", label: "Главная" },
    { path: "/portfolio", label: "Портфолио" },
    { path: "/about", label: "Обо мне" },
    { path: "#", label: "Связаться со мной" },
]

const socialNetworks = [
    {src: "vk.svg", path: "https://vk.com/anna_fedorova83", alt: "vk"},
]
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