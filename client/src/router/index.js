import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeRoute from '../views/home';
import ProfileRoute from '../views/profile';
import MapRoute from '../views/map';

Vue.use(VueRouter);

const routes = [
  HomeRoute,
  ProfileRoute,
  MapRoute,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
