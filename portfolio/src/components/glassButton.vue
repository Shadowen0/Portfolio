<script setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'icon'
  }
})
</script>

<template>
  <router-link 
    :to="to" 
    custom 
    v-slot="{ navigate, isExactActive }"
  >
    <div
      class="glass-btn"
      :class="{ active: isExactActive }"
      @click="navigate"
    >
      <img :src="icon" :alt="alt" />
    </div>
  </router-link>
</template>

<style scoped>
.glass-btn {
  width: var(--btn-size);
  height: var(--btn-size);

  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  transition: 
    width 0.3s ease,
    height 0.3s ease,
    transform 0.3s ease,
    background 0.3s ease;
}

.glass-btn:hover {
  width: calc(var(--btn-size) * 1.6);
  border-radius: 30px; 
  background: rgba(255, 255, 255, 0.25);
}

.glass-btn img {
  width: 50%;
  height: 50%;
  transition: transform 0.3s ease;
}

.glass-btn:hover img {
  transform: scale(1.2);
}

.glass-btn.active {
  background: white;
  border: 1px solid white;
}

.glass-btn.active img {
  filter: brightness(0);
}
</style>
