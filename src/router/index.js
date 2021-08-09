import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import DevJourney from '../views/DevJourney.vue';
import Me from '../views/Me.vue';
import ContactMe from '../views/ContactMe.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DevJourney',
    name: 'DevJourney',
    component: DevJourney
  },
  {
    path: '/Me',
    name: 'Me',
    component: Me
  },
  {
    path: "/ContactMe",
    name: 'ContactMe',
    component: ContactMe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
