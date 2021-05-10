<template>
  <div class="profile">
    <div style="margin-left:20px;margin-top:10px;" @click="goHome">&lt; Back</div>
    <div class="contents">
      <div class="img-container" :style="{ 'background': getBackgroundImage(dog) }"/>
      <p class="dogName">{{ dog.name }}</p>
      <!-- <p><span>Type</span>{{ dog.type }}</p> -->
      <p><span>Owner</span>{{ dog.owner }}</p>
      <p><span>Allergies</span>{{ dog.allergies || 'None' }}</p>
      <p><span>Description</span>{{ dog.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getBackgroundImage(dog) {
      return `center /contain no-repeat url("${dog.imgSrc}")`;
    },
    goHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
  .img-container {
    height: 250px;
  }
  p span {
    font-weight: bold;
    margin-right: 4px;
  }
  p span::after {
    content: ":";
  }
  .profile {
    text-align: left;
  }
  .contents{
    padding: 10px 20px 0 20px;
  }
  .dogName {
    font-size: xx-large;
    text-align: center;
    margin-top: 10px;
  }
</style>
