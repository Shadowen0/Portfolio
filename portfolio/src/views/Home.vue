<script setup>
const articles = [
  {
    title: "Développement",
    content: `
Assurer un développement durable dans le temps est le principe le plus important de l’informatique pour moi. Je trouve le travail d’optimisation et de miniaturisation des processus particulièrement intéressant et épanouissant.

Trouver un travail me confrontant constamment à des problèmes de logique complexes, nécessitant une réflexion approfondie, serait pour moi un véritable rêve.
`
  },
  {
    title: "Vision",
    content: `
Dans un monde en constant mouvement, il est essentiel d’être résilient et de continuer à s’adapter, quelle que soit la situation.

L’un des enjeux existentiels actuels en informatique est celui de l’intelligence artificielle. Trouver un équilibre entre le travail humain et le travail automatisé par l’IA est désormais extrêmement important. L’IA est un outil très puissant, mais elle ne pourra jamais remplacer la créativité, l’analyse et la sensibilité humaines.
`
  },
  {
    title: "Loisirs",
    content: `
Je m’épanouis particulièrement dans les domaines créatifs, notamment le dessin et la création de jeux vidéo.

Ma volonté est de procurer de la joie aux autres grâce à mes créations.
`
  }
]
</script>

<template>
  <div class="home-page">

    <section class="hero">

      <div class="hero-left">
        <div class="hero-image"></div>
      </div>

      <div class="hero-right">
        <div class="hero-text">
          <h1>Léothen Dusannier</h1>
          <h3>Développeur • Étudiant en BUT 3</h3>
          <p>
            Je suis passionné par l’informatique depuis mon plus jeune âge. 
            Je me suis orienté vers ce domaine au lycée grâce à la spécialité NSI, 
            où j’ai commencé à apprendre les bases du développement.

            <br /><br />

            C’est durant mes études supérieures, en BUT, que j’ai pu explorer plus en profondeur 
            les possibilités offertes par l’informatique. J’y ai appris des concepts plus complexes 
            et découvert ma passion pour le front-end et le design.

            <br /><br />

            Je suis particulièrement intéressé par la conception d’applications.
          </p>
        </div>

        <div class="footer-center">
        <a 
          href="https://www.linkedin.com/in/léothen-dusannier-9aa950339/"
          target="_blank"
          class="social-link"
        >
          LinkedIn
        </a>

        <a 
          href="https://github.com/Shadowen0"
          target="_blank"
          class="social-link"
        >
          GitHub
        </a>
      </div>

        <div class="hero-buttons">
          <router-link to="/experiences" class="primary-btn">Voir mes projets</router-link>
          <router-link to="/formulaireContact" class="secondary-btn">Me contacter</router-link>
        </div>
      </div>

    </section>

    <section class="about-section">
      <h2>A propos de moi</h2>

      <div class="about-grid">
        <div 
          class="about-card"
          v-for="(article, index) in articles"
          :key="index"
        >
          <h3>{{ article.title }}</h3>
          <div class="title-bar"></div>

          <div class="about-content">
            <p>{{ article.content }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="youtube-section">
      <h2>Mon BUT en 180 secondes</h2>

      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/IoVB5Hn2m_k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>

  </div>
  
</template>

<style>
.footer-center {
  display: flex;
  gap: 30px;
}

.social-link {
  text-decoration: none;
  color: white;
  font-weight: 500;
  position: relative;
  transition: 0.3s ease;
}

.social-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, #6e8efb, #a777e3);
  transition: 0.3s ease;
}

.social-link:hover::after {
  width: 100%;
}

.social-link:hover {
  color: #a777e3;
}

.home-page {
  display: flex;
  flex-direction: column;
}

.hero {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8vw;

  padding: 0 8vw;
}

.hero-left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  width: 350px;
  height: 350px;
  border-radius: 50%;

  background: linear-gradient(135deg, #6e8efb, #a777e3);
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);

  transition: transform 0.4s ease;
}

.hero-image:hover {
  transform: scale(1.05);
}

.hero-right {
  max-width: 500px;
}

.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero-text h3 {
  font-weight: 400;
  opacity: 0.8;
  margin-bottom: 20px;
}

.hero-text p {
  line-height: 1.6;
  opacity: 0.7;
}

.hero-buttons {
  margin-top: 30px;
  display: flex;
  gap: 20px;
}

.primary-btn {
  padding: 12px 28px;
  border-radius: 30px;
  border: none;
  cursor: pointer;

  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;

  transition: all 0.3s ease;
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.secondary-btn {
  padding: 12px 28px;
  border-radius: 30px;
  border: 1px solid rgba(255,255,255,0.3);
  background: transparent;
  cursor: pointer;
  color: white;

  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: rgba(255,255,255,0.1);
}

.about-section {
  padding: 100px 10vw;
  text-align: center;
}

.about-section h2 {
  font-size: 2.8rem;
  margin-bottom: 80px;
  font-weight: 500;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}

.about-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-card h3 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.title-bar {
  width: 120px;
  height: 10px;
  border-radius: 20px;
  margin-bottom: 25px;

  background: linear-gradient(90deg, #6e8efb, #a777e3);
}

.about-content {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  padding: 25px;
  max-width: 300px;

  transition: all 0.3s ease;
}

.about-content:hover {
  transform: translateY(-6px);
  background: rgba(255,255,255,0.08);
}

.about-content p {
  line-height: 1.7;
  font-size: 0.95rem;
  opacity: 0.85;
  text-align: left;


  white-space: pre-line;
}

.youtube-section {
  padding: 100px 10vw;
  text-align: center;
}

.youtube-section h2 {
  font-size: 2.8rem;
  margin-bottom: 60px;
  font-weight: 500;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  border-radius: 20px;
  overflow: hidden;

  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  padding: 15px;
}

.video-container iframe {
  width: 100%;
  height: 500px;
  border-radius: 15px;
  border: none;
}
</style>
