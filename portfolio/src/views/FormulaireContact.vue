<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const success = ref(false)
const error = ref(false)

const sendForm = async () => {
  success.value = false
  error.value = false

  try {
    await emailjs.send(
      '87656',
      '6789',
      {
        from_name: name.value,
        from_email: email.value,
        message: message.value
      },
      'ZEUI876IHDSF'
    )

    success.value = true
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (err) {
    console.error(err)
    error.value = true
  }
}
</script>

<template>
  <div class="contact-page">
    <h1>Me contacter</h1>

    <form @submit.prevent="sendForm" class="contact-form">
      <input 
        v-model="name"
        type="text" 
        placeholder="Votre nom"
        required
      />

      <input 
        v-model="email"
        type="email" 
        placeholder="Votre email"
        required
      />

      <textarea 
        v-model="message"
        placeholder="Votre message"
        rows="6"
        required
      ></textarea>

      <button type="submit">Envoyer</button>

      <p v-if="success" class="success">
        ✅ Message envoyé avec succès !
      </p>

      <p v-if="error" class="error">
        ❌ Une erreur est survenue.
      </p>
    </form>
  </div>
</template>

<style>
.contact-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.contact-form {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form input,
.contact-form textarea {
  padding: 15px;
  border-radius: 12px;
  border: none;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  color: white;
  font-size: 1rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: 2px solid #6e8efb;
}

.contact-form button {
  padding: 14px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  font-size: 1rem;
  transition: 0.3s ease;
}

.contact-form button:hover {
  transform: translateY(-3px);
}

.success {
  color: #4caf50;
}

.error {
  color: #ff5252;
}
</style>