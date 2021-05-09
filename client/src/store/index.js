import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import DogModel from './dogs.model';
import OwnerModel from './owners.model';

const models = [
  DogModel,
  OwnerModel,
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
