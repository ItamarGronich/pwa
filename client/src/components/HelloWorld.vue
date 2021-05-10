<template>
  <div class="hello">
      <dog-carousel></dog-carousel>
  </div>
</template>

<script>
import DogCarousel from './dog-carousel/dog-carousel.vue';

export default {
  name: 'HelloWorld',
  components: { DogCarousel },
  props: {
    msg: String,
  },
};
</script>
