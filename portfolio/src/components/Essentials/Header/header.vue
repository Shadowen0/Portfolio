<script setup>
import GlassButton from '../../glassButton.vue'
</script>

<template>
  <header class="header">
    <nav class="nav">
      <GlassButton to="/" icon="/headerIcons/home-icon.png" alt="Home" />
      <GlassButton to="/experiences" icon="/headerIcons/suitcase.png" alt="Experiences" />
      <GlassButton to="/CV" icon="/headerIcons/google-docs.png" alt="Home" />
      <GlassButton to="/formulaireContact" icon="/headerIcons/exam.png" alt="Home" />
    </nav>
  </header>
</template>

<style scoped>
.header {
  --btn-size: 55px;
  --btn-expand: 70px; 

  position: fixed;
  z-index: 10;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);

  width: 50%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);

  transition: all 0.4s ease;
}

.header:hover {
  --btn-size: var(--btn-expand);
  height: 100px;
}

.nav {
  display: flex;
  gap: 20px;
}
</style>