<template>
    <div class="main-info">
        <div class="container">
            <div class="main-info__content">
            <div class="main-info__text-content">
                <h1>
                    <span>{{ mainInfo.title.coloredPart }}</span>
                    {{ mainInfo.title.firstPart }}
                </h1>
                <p>{{ mainInfo.description }}</p>
            </div>
            <UIButton :label="mainInfo.buttonText"/>
        </div>
    
        <img 
            class="main-info__img" 
            :src="mainInfo.img" 
            alt="My photo"
        />
        </div>
    </div>
</template>

<script setup>
import {reactive} from 'vue';

import UIButton from '@/components/ui/Button/UIButton.vue';

const mainInfo = reactive({
    title: {
        firstPart: 'Анна Николаевна ',
        coloredPart: 'Федорова',
    },
    description: 'Преподаватель Томского экономико-промышленного колледжа, кафедра IT-технологий.',
    buttonText: 'Связаться со мной',
    img: 'images/mainInfo/main-info-img.png'
})
</script>

<style scoped lang="scss">
.main-info {
    background-color: $base-light;

    .container {
        display: flex;
        align-items: center;
        padding: 135px 15px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        max-width: 46%;
        width: 100%;
        gap: 32px;
    }

    &__text-content {
        @extend .main-info__content;
        max-width: 100%;
        gap: 20px;
        color: $dark-primary-secondary;

        h1 span{
            color: $primary;
        }

        p {
            max-width: 80%;
            width: 100%;
            font-size: 24px;
        }

    }

    button {
        width: fit-content;
    }

    &__img {
        max-width: 51%;
        width: 100%;
    }
}
</style>