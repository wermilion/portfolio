<template>
  <div class="home">
    <MainInfo />
    <MyAchievements />
    <AboutMe />
  </div>
</template>

<script setup>
import MainInfo from'@/components/mainPage/MainInfo.vue';
import MyAchievements from '@/components/mainPage/MyAchievements.vue';
import AboutMe from '@/components/mainPage/AboutMe.vue';
</script>