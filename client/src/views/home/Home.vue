<template>
  <div class="home">
    <dog-carousel></dog-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import DogCarousel from '../../components/dog-carousel/dog-carousel.vue';

export default {
  name: 'Home',
  components: {
    DogCarousel,
  },
  props: {
    msg: String,
  },
};
</script>
