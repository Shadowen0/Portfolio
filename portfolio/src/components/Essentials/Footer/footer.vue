<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <p>© {{ year }} — Mon portfolio </p>
  </footer>
</template>

<style scoped>
footer {
  min-width: 300px;
  padding: 20px;
  background: #222;
  color: white;
  text-align: center;
}
</style>
