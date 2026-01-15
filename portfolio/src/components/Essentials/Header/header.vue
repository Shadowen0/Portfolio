<template>
  <header>
    <h1>Mon Portfolio</h1>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/projets">Projets</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 20px;
  background: #222;
  color: white;
}
nav a {
  margin-right: 10px;
  color: white;
}
</style>
