<script setup>

import HomePage from './components/HomePage.vue';
</script>

<template>
  <div :style="backgroundStyle" class="background-container">
    <HomePage/>
  </div>
</template>

<style scoped>
.background-container {
  width: 100%;
}
</style>
