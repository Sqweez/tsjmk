import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '../views/Intro.vue'
import Login from '../views/Login.vue'
import Register from "../views/Register";
import Home from "../views/Home";
import Notifications from "../views/Notifications";
import NotificationDetail from "../views/NotificationDetail";
import store from './../store';
import Services from "../views/Services";
import ServiceDetail from "../views/ServiceDetail";
import Tickets from "../views/Tickets";
import Chat from "../views/Chat";
import CreateTicket from "../views/CreateTicket";
import Contacts from "../views/Contacts";
import Counter from "../views/Counter";
import NewCounter from "../views/NewCounter";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/notification-details',
    name: 'NotifactionDetails',
    component: NotificationDetail
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/service-details',
    component: ServiceDetail,
    name: 'ServiceDetails'
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/new-ticket',
    name: 'NewTicket',
    component: CreateTicket
  },
  {
    name: 'Contacts',
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/counters',
    name: 'Counters',
    component: Counter
  },
  {
    path: '/new-counter',
    name: 'NewCounter',
    component: NewCounter
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('disableMenu');
  next();
})

export default router
