<script setup>
import { ref } from 'vue'
import techBadge from '../techBadge.vue'

const props = defineProps({
  title: String,
  description: String,
  tech: {
    type: Array,
    default: () => []
  },
  link: String,
  images: {
    type: Array,
    default: () => []
  }
})

const selectedImage = ref(props.images[0] || '')
const showLightbox = ref(false)

function openLightbox() {
  showLightbox.value = true
}

function closeLightbox() {
  showLightbox.value = false
}
</script>

<template>
  <div class="project-card">

    <div class="project-card-left">
      <h2>{{ title }}</h2>
      <p class="description">{{ description }}</p>

      <div class="tech-list">
        <techBadge 
          v-for="(item, i) in tech" 
          :key="i"
          :badge-name="item"
        />
      </div>

      <a 
        v-if="link && link !== '#'"
        :href="link"
        target="_blank"
        class="project-link"
      >
        Voir le projet →
      </a>
    </div>

    <div class="project-card-right">
      <img 
        v-if="selectedImage"
        :src="'/projetImage/' + selectedImage" 
        class="main-image"
        @click="openLightbox"
      />

      <div class="thumbnail-container">
        <img
          v-for="(img, index) in images"
          :key="index"
          :src="'/projetImage/' + img"
          class="thumbnail"
          @click="selectedImage = img"
        />
      </div>
    </div>

    <Teleport to="body">
      <div 
        v-if="showLightbox" 
        class="lightbox-overlay" 
        @click.self="closeLightbox"
      >
        <img :src="'/projetImage/' + selectedImage" class="lightbox-image" />
        <button class="lightbox-close" @click="closeLightbox">×</button>
      </div>
    </Teleport>

  </div>
</template>

<style scoped>
.project-card {
    width: 100%;
    max-width: 750px; 
    display: flex;
    flex-direction: row; 
    justify-content: space-between; 
    gap: 30px;
    padding: 30px;
    border-radius: 20px;

    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);

    transition: all 0.3s ease;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.project-card-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.project-card-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    flex-shrink: 0; 
}

.main-image {
    width: 300px;
    height: 180px;
    object-fit: cover;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s ease;
}

.main-image:hover {
    transform: scale(1.03);
}

.thumbnail-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap; 
}

.thumbnail {
    width: 60px;
    height: 40px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s ease;
}

.thumbnail:hover {
    opacity: 1;
    transform: scale(1.05);
}

.description {
    opacity: 0.8;
    margin: 15px 0;
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.project-link {
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s ease;
}

.project-link:hover {
    opacity: 0.7;
}

.lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.lightbox-image {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
}

.lightbox-close {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 2rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
}

@media (max-width: 768px) {
    .project-card {
        flex-direction: column;
        align-items: center;
    }

    .project-card-left {
        max-width: 100%;
    }

    .project-card-right {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .main-image {
        width: 80%;
        height: auto;
    }

    .thumbnail {
        width: 50px;
        height: 30px;
    }
}
</style>