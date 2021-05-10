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
    <div class="home-item">
      <div class="home-item-header">Dog of the week</div>
      <div class="dog-of-the-week-wrapper">
        <img class="dog-of-the-week-image" src="../../../../server/images/dogs/nils.jpg" alt="">
        <div>Nils has been super fluffy this week</div>
      </div>
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
  padding: 40px 0;
}

.home-item-header {
  font-size: 16px;
  font-weight: 800;
  align-self: start;
  padding-left: 20px;
  padding-bottom: 15px;
}

.dog-of-the-week-wrapper {
  display: flex;
  align-items: center;
  padding: 10px
}

.dog-of-the-week-image {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding: 0 10px;
}
</style>
