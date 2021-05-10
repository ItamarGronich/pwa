<template>
  <div class="profile">
    <div class="img-container" :style="{ 'background': getBackgroundImage(dog) }"/>
    <p>{{ dog.name }}</p>
    <p><span>Type</span>{{ dog.type }}</p>
    <p><span>Owner</span>{{ dog.owner }}</p>
    <p><span>Allergies</span>{{ dog.allergies || 'None' }}</p>
    <p><span>Description</span>{{ dog.description }}</p>
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
    padding: 20px 20px 0 20px;
  }
</style>
