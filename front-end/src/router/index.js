import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import DevJourney from '../views/DevJourney.vue';
// import Me from '../views/Me.vue';
import ContactMe from '../views/ContactMe.vue';

import LoadingScreen from '../views/LoadingScreen.vue';
import LeaveMessageHere from '../views/LeaveMessageHere.vue';
import ThankYou from '../views/ThankYou.vue';

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
  // {
  //   path: '/Me',
  //   name: 'Me',
  //   component: Me
  // },
  {
    path: "/ContactMe",
    name: 'ContactMe',
    component: ContactMe
  },
  {
    path: "/LoadingScreen",
    name: "LoadingScreen",
    component: LoadingScreen
  },
  {
    path: "/LeaveMessageHere",
    name: "LeaveMessage",
    component: LeaveMessageHere
  },
  {
    path: "/ThankYou",
    name: "ThankYou",
    component: ThankYou
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
