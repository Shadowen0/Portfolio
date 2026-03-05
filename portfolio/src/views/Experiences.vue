<script setup>
import { ref, computed } from 'vue'

import projectCard from '@/components/PageExperiences/projectCard.vue';

const projects = [
  {
    title: "Jeu de la vie",
    description: 
    `
    J’ai assuré le développement d’une application simulant le Jeu de la vie, imaginé par John Horton Conway en 1970. Ce projet a été réalisé en C++. J’ai développé le back-end ainsi que l’interface graphique en utilisant la bibliothèque Qt.

    Ce projet m’a permis d’approfondir ma maîtrise du C++ et de consolider mes connaissances en programmation orientée objet, notamment en matière de structuration et d’optimisation du code.
    `,
    tech: ["C++", "QT", "Optimisation"],
    images: [
      "jeu_de_la_vie/jeu_de_la_vie_1.png",
      "jeu_de_la_vie/jeu_de_la_vie_2.png",
    ],
    link: "https://github.com/Shadowen0/Jeu-de-la-vie"
  },
  {
    title: "Application astrologique",
    description: 
    `
    En groupe de deux, nous avons développé une application de visualisation astrale.

    L’utilisateur peut saisir le nom d’une constellation ou une position céleste. Le programme Python interroge alors une API publique de la NASA afin de récupérer les données correspondantes et télécharger une image associée.

    L’utilisateur peut ensuite visualiser l’image et manipuler les différents calques de couleur.

    Ce projet nous a permis de mettre en place de bonnes pratiques de développement : documentation, lisibilité du code et gestion des erreurs en Python.
    `,
    tech: ["Python", "Bonnes pratiques", "Git", "Collaboration"],
    images: 
    [
      "appli_astro/application_astro_1.png",
      "appli_astro/application_astro_2.png",
      "appli_astro/application_astro_3.png",
    ],
    link: "https://github.com/Shadowen0/Application-astro-photo"
  },
  {
    title: "Boids",
    description: 
    `
    Pour ce projet, j’ai développé une simulation de vol d’oiseaux basée sur les principes de Craig Reynolds.

    À partir d’un code fourni, je l’ai adapté pour qu’il fonctionne avec la bibliothèque Pygame, généralement utilisée pour le développement de jeux vidéo.

    Une fois le système de base implémenté, j’ai ajouté de nouvelles règles : gestion d’équipes distinctes et interaction avec la souris (les boids suivent et tournent autour du curseur).

    J’ai également réalisé un important travail d’optimisation afin de permettre la simulation d’un grand nombre de boids simultanément.
    `,
    tech: ["Python","Optimisation","Pygame"],
    images: 
    [
      "boid/boid_1.png",
    ],
    link: "https://github.com/Shadowen0/Boids"
  },
  {
    title: "TicTacToe",
    description: 
    `
    Développement d’un jeu de morpion en groupe de quatre en langage C.

    La principale difficulté de ce projet résidait dans l’implémentation du mode multijoueur réseau. Un utilisateur peut héberger une partie, un autre peut s’y connecter, et il est également possible de rejoindre une partie en cours en tant que spectateur.

    Ce projet m’a permis de travailler sur la gestion réseau, la synchronisation des données et la collaboration en équipe.
    `,
    tech: ["Git","Collaboration","C"],
    images: 
    [
      "tictactoe/tictactoe_1.webp",
      "tictactoe/tictactoe_2.webp",
    ],
    link: "https://github.com/Shadowen0/TicTacToe"
  },
  {
    title: "Gladius dominus",
    description: 
    `
    Il s’agit du projet le plus ambitieux que j’ai réalisé durant ma troisième année de BUT.

    Nous devions concevoir, designer et développer un jeu vidéo de stratégie intégrant une intelligence artificielle capable de jouer contre l’utilisateur ainsi que contre elle même.

    J’ai été responsable du développement de l’IA des tanks ainsi que de la création graphique de l’ensemble des assets du jeu.

    Ce projet a été réalisé en équipe de six personnes en utilisant le moteur Godot.
    `,
    tech: ["Godot","IA","Collaboration","GDScript","Git","Optimisation","Bonnes pratiques"],
    images: 
    [
      "gladius/gladius_1.jpg",
      "gladius/gladius_2.jpg",
      "gladius/gladius_3.jpg",
    ],
    link: "https://github.com/Aurelienxx/Gladius"
  },
  {
    title: "Jeu VR",
    description: 
    `
    Durant ce projet, j’ai travaillé au sein d’un groupe de quatre personnes sur la création d’un jeu vidéo en réalité virtuelle.

    Ce projet m’a formé aux bonnes pratiques de développement sur le moteur de jeu Unreal, ainsi qu’à l’optimisation afin de créer un jeu qui ne consomme pas énormément de ressources lors de son utilisation.
    `,
    tech: ["Unreal","VR","Optimisation","Bonnes pratiques"],
    images: 
    [
      "vr/vr_1.webp",
    ],
    link: "#"
  },
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

    <div class="contact-cta">
      <router-link to="/formulaireContact" class="contact-btn">
        Discutons de votre projet
      </router-link>
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
  align-items: center; 
}

.contact-cta {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}

.contact-btn {
  padding: 18px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;

  background: linear-gradient(135deg, #6e8efb, #a777e3);

  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}

.contact-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(110, 142, 251, 0.1);
}

.contact-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255,255,255,0.4),
    transparent
  );
  transition: 0.6s;
}

.contact-btn:hover::before {
  left: 100%;
}
</style>