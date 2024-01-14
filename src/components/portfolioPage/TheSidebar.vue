<template>
    <div class="sidebar">
        <!-- <a
            v-for="(item, index) in data"
            :key="index"
            :href="item.path"
            class="side-item"
        >
            {{ item.name }}
        </a> -->
    </div>
</template>

<script setup>
// const data = [
//     {name: 'Дипломы', path: '#diploms'},
//     {name: 'Сертификаты', path: '#certificates'},
//     {name: 'Повышение квалификации', path: '#qualification'},
//     {name: 'Благодарности', path: '#appreciations'},
// ]
</script>

<style scoped lang="scss">
.sidebar {
    color: #000;
    background-color: #eee;

    float: left;
    left: 0;
    padding: 15px;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}
</style>