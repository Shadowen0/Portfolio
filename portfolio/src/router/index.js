import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Experiences from '@/views/Experiences.vue'
import FormulaireContact from '@/views/FormulaireContact.vue'
import CV from '@/views/CV.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: Experiences
  },
  {
    path: '/formulaireContact',
    name: 'formulaireContact',
    component: FormulaireContact
  },
  {
    path: '/CV',
    name: 'CV',
    component: CV
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router