<script setup>
import { ref, computed } from 'vue'

import projectCard from '@/components/PageExperiences/projectCard.vue';

const projects = [
  {
    title: "STOLAS",
    description: "I'm fucking the owl ted.",
    tech: ["Vue", "CSS", "Vite", "Vite", "Java", "Vite", "Vite", "Vite"],
    images: ["stolla-col.webp","im-looking-at-all-three-of-stolas-pngs-and-its-the-way-his-v0-1p7b30poib1e1.webp","images.jpg","stolas_family.webp","stolas-is-a-brilliant-character-v0-1jahw4elc3ue1.webp"],
    link: "#"
  },
  {
    title: "STOLAS",
    description: "Owltastic",
    tech: ["Vue", "CSS", "Vite"],
    images: ["stolla-col.webp"],
    link: "#"
  },
  {
    title: "I CANT DO THIS NAYMORE",
    description: "KYS.",
    tech: ["Vue", "JavaScript"],
    images: [],
    link: "#"
  }
]

const selectedTag = ref(null)

const allTags = computed(() => {
  const tags = projects.flatMap(project => project.tech)
  return [...new Set(tags)]
})

const filteredProjects = computed(() => {
  if (!selectedTag.value) return projects
  return projects.filter(project =>
    project.tech.includes(selectedTag.value)
  )
})
</script>

<template>
  <section class="projects-page">

    <div class="filter-bar">
      <button 
        class="filter-btn"
        :class="{ active: selectedTag === null }"
        @click="selectedTag = null"
      >
        Tous
      </button>

      <button
        v-for="tag in allTags"
        :key="tag"
        class="filter-btn"
        :class="{ active: selectedTag === tag }"
        @click="selectedTag = tag"
      >
        {{ tag }}
      </button>
    </div>

    <div class="projects-grid">
      <projectCard
        v-for="(project, index) in filteredProjects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :tech="project.tech"
        :link="project.link"
        :images="project.images"
      />
    </div>

  </section>
</template>

<style>
.projects-page {
  padding: 120px 10vw;
  padding-top: 0;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 50px;
  justify-content: center;
}

.filter-btn {
  padding: 8px 20px;
  border-radius: 25px;
  color: white;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.05);
  cursor: pointer;
  transition: 0.3s ease;
}

.filter-btn:hover {
  background: rgba(255,255,255,0.15);
}

.filter-btn.active {
  background: white;
  color: black;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>