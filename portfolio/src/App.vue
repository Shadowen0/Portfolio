<script setup>
import Header from './components/Essentials/Header/header.vue'
import Footer from './components/Essentials/Footer/footer.vue'
</script>

<template>
  <div class="layout">
    <Header />

    <main class="main-content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;


  display: flex;
  flex-direction: column;
}
</style>