import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutRoute from '../views/about';
import HomeRoute from '../views/home';

Vue.use(VueRouter);

const routes = [
  AboutRoute,
  HomeRoute,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
