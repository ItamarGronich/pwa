<template>
  <div class="home">
    <div class="home-item">
      <div class="home-item-header">The dogs of Fundbox</div>
      <dog-carousel class="dog-carousel"></dog-carousel>
    </div>
    <div class="home-item">
      <div class="home-item-header">Slack feed</div>
      <slack-thread></slack-thread>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DogCarousel from '../../components/dog-carousel/dog-carousel.vue';
import SlackThread from '../../components/slack-thread/slack-thread.vue';

export default {
  name: 'Home',
  components: {
    DogCarousel,
    SlackThread,
  },
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>

.dog-carousel {
  overflow: hidden;
}

.home-item {
  display: flex;
  flex-direction: column;
  padding: 30px 0;
}

.home-item-header {
  font-size: 16px;
  font-weight: 800;
  align-self: start;
  padding-left: 20px;
  padding-bottom: 15px;
}

</style>
