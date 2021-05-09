import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import DogModel from './dogs.model';
import UserModel from './user.model';

const models = [
  DogModel,
  UserModel,
];

Vue.use(Vuex);

const database = new VuexORM.Database();
models.forEach((model) => database.register(model));

export default new Vuex.Store({
  plugins: [VuexORM.install(database)],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});

DogModel.insert({
  data: [
    {
      name: 'keppi', img: 'fooo.png', type: 'fooo', owner: 'yossi', food: 'fooo',
    },
    {
      name: 'keppi', img: 'fooo.png', type: 'fooo', owner: 'yossi', food: 'fooo',
    },
    {
      name: 'keppi', img: 'fooo.png', type: 'fooo', owner: 'yossi', food: 'fooo',
    },
    {
      name: 'keppi', img: 'fooo.png', type: 'fooo', owner: 'yossi', food: 'fooo',
    },
    {
      name: 'keppi', img: 'fooo.png', type: 'fooo', owner: 'yossi', food: 'fooo',
    },
    {
      name: 'keppi', img: 'fooo.png', type: 'fooo', owner: 'yossi', food: 'fooo',
    },
  ],
});
const dogs = DogModel.query().all();
console.log(dogs);
