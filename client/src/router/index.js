import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutRoute from '../views/about';
import HomeRoute from '../views/home';
import TestRoute from '../views/test';

Vue.use(VueRouter);

const routes = [
  AboutRoute,
  HomeRoute,
  TestRoute,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
