<template>
  <VueSlickCarousel
    v-bind="settings"
    class="carousel"
  >
    <div
      v-for="(dog, i) in dogsData"
      :dog="dog"
      :key="i"
      class="carousel-item"
      @click="openCard"
    >
      <img class="dog-item" src="../../assets/logo.png" alt="">
    </div>

  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import Dog from '../../store/dogs.model';
import DogCard from '../dog-card/dog-card.vue';

export default {
  name: 'DogCarousel',
  components: { VueSlickCarousel, DogCard },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
        slidesToScroll: 1,
        useTransform: true,
        rows: 1,
        // variableWidth: true,
      },
    };
  },
  computed: {
    dogsData() {
      console.log(Dog.getAllDogs());
      return [
        {
          id: 1, name: 'lul', img: 'client/src/assets/logo.png', owner: 'adi', food: 'yumm', allergies: 'peanuts', description: 'lazy dog',
        },
        {
          id: 1, name: 'lul', img: 'IMG', owner: 'adi', food: 'yumm', allergies: 'peanuts', description: 'lazy dog',
        },
        {
          id: 1, name: 'lul', img: 'IMG', owner: 'adi', food: 'yumm', allergies: 'peanuts', description: 'lazy dog',
        },
        {
          id: 1, name: 'lul', img: 'IMG', owner: 'adi', food: 'yumm', allergies: 'peanuts', description: 'lazy dog',
        },
        {
          id: 1, name: 'lul', img: 'IMG', owner: 'adi', food: 'yumm', allergies: 'peanuts', description: 'lazy dog',
        },
        {
          id: 1, name: 'lul', img: 'IMG', owner: 'adi', food: 'yumm', allergies: 'peanuts', description: 'lazy dog',
        },
        {
          id: 1, name: 'lul', img: 'IMG', owner: 'adi', food: 'yumm', allergies: 'peanuts', description: 'lazy dog',
        },
        {
          id: 1, name: 'lul', img: 'IMG', owner: 'adi', food: 'yumm', allergies: 'peanuts', description: 'lazy dog',
        },
        {
          id: 1, name: 'lul', img: 'IMG', owner: 'adi', food: 'yumm', allergies: 'peanuts', description: 'lazy dog',
        },
        {
          id: 1, name: 'lul', img: 'IMG', owner: 'adi', food: 'yumm', allergies: 'peanuts', description: 'lazy dog',
        },
      ];
      // return
    },
  },
  methods: {
    openCard() {
      console.log('open card');
    },
  },
};
</script>

<style scoped lang="scss">

  .carousel-item {
    display: flex !important;
    justify-content: center;
  }

  .carousel {
   ::v-deep .slick-slide:not(.slick-center) {
      transform: scale(0.8);
    }
  }

  .dog-item {
    border-radius: 40%;
  }

</style>
