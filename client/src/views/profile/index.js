export default {
  path: '/profile',
  name: 'Profile',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ './Profile.vue'),
  props: (route) => ({
    dog: route.dog,
    ...route.params,
  }),
};
