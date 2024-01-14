<template>
    <TheSidebar @showDiplomas="showDiplomas" @showCertificates="showCertificates"/>
    <div class="container elements">
        <div
                v-for="(item, index) in items"
                :key="index"
                class="elements-item"
        >
            <img :src="'images/' + item.src">
        </div>
    </div>
</template>

<script>
import TheSidebar from '@/components/portfolioPage/TheSidebar.vue';

export default {
    components: {
        TheSidebar
    },
    data() {
        return {
            diplomas: [
                {src: 'diploms/diplom_1C.png', date: '2020 год.'},
                {src: 'diploms/diplom_best_practise.jpg', date: '2020 год.'},
                {src: 'diploms/diplom_best_resource.jpg', date: '2021 год.'},
                {src: 'diploms/diplom_modern_system_1.jpg', date: '2021 год.'},
                {src: 'diploms/diplom_modern_system_2.jpeg', date: '2022 год.'},
                {src: 'diploms/diplom_professional.jpg', date: '2017 год.'},
                {src: 'diploms/diplom_WSR_1.jpg', date: '2021 год.'},
                {src: 'diploms/diplom_WSR_2.jpg', date: '2020 год.'},
            ],
            certificates: [
                { src: 'certificates/certificate_Togushchakova_WSR_1_place.jpg', date: '01.01.2022' },
                { src: 'certificates/certificate2.jpg', date: '02.02.2022' },
                { src: 'certificates/certificate3.jpg', date: '03.03.2022' }
            ],
            items: []
        };
    },
    methods: {
        showDiplomas() {
            this.items = this.diplomas;
        },
        showCertificates() {
            this.items = this.certificates;
        }
    }
};
</script>

<style scoped lang="scss">
.container {
  width: 60%;
}

.elements {
  display: flex;
  flex-direction: column;
  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;
  padding: 15px;
  gap: 15px;

  &-item {
    display: flex;
    justify-content: center;

    img {
      width: 50%;
    }
  }
}
</style>