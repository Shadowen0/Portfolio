<script setup>
import Header from './components/Essentials/Header/header.vue'
import Footer from './components/Essentials/Footer/footer.vue'
</script>

<template>
  <div class="layout">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
