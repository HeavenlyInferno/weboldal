<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
 <RouterView/>
  </div>
</template>

<style scoped>
div {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background-image: url('/Heavenly_vue_web/WEB/src/assets/HeavenlyInferno.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            size: 100%;
            overflow: hidden; /* Görgetés letiltása */
        }
</style>
