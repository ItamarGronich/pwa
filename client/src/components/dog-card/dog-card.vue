<template>
    <div>
        <modal class="card-wrapper">
          <div>{{ dog.name }}</div>
          <div>{{ dog.img }}</div>
          <div>{{ dog.owner }}</div>
          <div>{{ dog.food }}</div>
          <div>{{ dog.allergies }}</div>
          <div>{{ dog.description }}</div>
        </modal>
    </div>
</template>

<script>
import VModal from 'vue-js-modal';
import Vue from 'vue';

Vue.use(VModal);

export default {
  name: 'DogCard',
  props: {
    dog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card-wrapper {
    border: 2px solid darkblue;
    border-radius: 50%;
}
</style>
