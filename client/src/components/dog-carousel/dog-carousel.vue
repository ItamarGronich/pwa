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
      @click="openCard(dog)"
    >
      <img class="dog-item" :src="dog.imgSrc" alt="">
    </div>

  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import { fetchAllDogs } from '@/api';
import Dog from '@/store/dogs.model';

export default {
  name: 'DogCarousel',
  components: { VueSlickCarousel },
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
      },
      dogsData: [1],
    };
  },
  mounted() {
    this.getDogs();
  },
  methods: {
    async getDogs() {
      const dogs = await fetchAllDogs();
      await Dog.addDogs(dogs);
      this.dogsData = Dog.getAllDogs();
    },
    openCard(dog) {
      this.$router.push({
        name: 'Profile',
        params: {
          dog,
        },
      });
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
    height: 150px;
    width: 150px;
  }

</style>
