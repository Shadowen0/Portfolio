<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-content">

      <div class="footer-left">
        <p>Portfolio Dusannier Léothen</p>
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

      <div class="footer-right">
        <p class="credits">
          Icônes & éléments graphiques :
          <a href="https://www.flaticon.com" target="_blank">
            Flaticon
          </a>
        </p>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 120px;
  padding: 40px 5vw;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);

  border-top: 1px solid rgba(255,255,255,0.1);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-left p {
  opacity: 0.7;
}

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

.credits {
  font-size: 0.85rem;
  opacity: 0.6;
}

.credits a {
  color: #a777e3;
  text-decoration: none;
}

.credits a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>