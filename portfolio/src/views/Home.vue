<script setup>
const articles = [
  {
    title: "Développement",
    content: "je suis un texte aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  },
  {
    title: "Créativité",
    content: "je suis un texte aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  },
  {
    title: "Vision",
    content: "je suis un texte aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
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
          <h3>Développeur Web • Étudiant en BUT 3</h3>
          <p>
            JE SUIS UNE DESCRIPTION DESCRIPTIVE SALUTT
          </p>
        </div>

        <div class="hero-buttons">
          <router-link to="/experiences" class="primary-btn">Voir mes projets</router-link>
          <router-link to="/" class="secondary-btn">Me contacter</router-link>
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
      <h2>Mon BUT en je sais pas combien de temps</h2>

      <div class="video-container">
        <iframe
          src="https://www.youtube.com/watch?v=IoVB5Hn2m_k&t=1175s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>

  </div>
  
</template>

<style>
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

  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
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
