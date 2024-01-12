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
            />
        </div>
    </header>
</template>

<script setup>
import UIButton from '@/components/ui/Button/UIButton.vue';

const navLinks = [
    { path: "#", label: "Home" },
    { path: "#", label: "Portfolio" },
    { path: "#", label: "About me" },
    { path: "#", label: "Testimonials" }
]
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    padding: 25px 0;
    z-index: 1000;

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
            transition: all .3s ease-out;

            &:hover {
                color: $primary;
            }
        }
    }
}
</style>