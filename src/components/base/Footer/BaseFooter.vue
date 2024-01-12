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
                    <img :src="item.src" :alt="item.alt">
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>

const footerLinks = [
    { path: "#", label: "Home" },
    { path: "#", label: "Portfolio" },
    { path: "#", label: "About me" },
    { path: "#", label: "Contact" },
    { path: "#", label: "Testimonials" },
]

const socialNetworks = [
    {src: "/images/socials/facebook.svg", path: "#", alt: "Facebook"},
    {src: "/images/socials/inst.svg", path: "#", alt: "Inst"},
    {src: "/images/socials/twitter.svg", path: "#", alt: "Twitter"},
    {src: "/images/socials/linkedin.svg", path: "#", alt: "Linkedin"},
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
        transition: all .3s ease-out;

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