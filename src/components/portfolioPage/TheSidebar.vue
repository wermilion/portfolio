<template>
    <div class="sidebar">
        <span
                v-for="(item, index) in data"
                :key="index"
                @click="item.method"
        >
            {{ item.name }}
        </span>
    </div>
</template>

<script setup>
const data = [
    {name: 'Дипломы', method: 'showDiplomas'},
    {name: 'Сертификаты', method: 'showCertificates'},
    {name: 'Повышение квалификации', method: 'showQualification'},
    {name: 'Благодарности', method: 'showAppreciations'},
]
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  left: 0;
  width: 250px;
  padding: 15px;
  gap: 10px;

  background-color: #eee;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  span {
    text-decoration: none;
    color: #000;
    padding: 10px;
  }

  span:hover {
    background-color: $primary;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>