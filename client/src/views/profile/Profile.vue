<template>
  <div class="profile">
    <img :src="dog.imgSrc" />
    <p>{{ dog.name }}</p>
    <p><span>Type</span>{{ dog.type }}</p>
    <p><span>Owner</span>{{ dog.owner }}</p>
    <p><span>Allergies</span>{{ dog.allergies || 'None' }}</p>
    <p><span>Description</span>{{ dog.description }}</p>
  </div>
</template>

<script>
// import Dog from '@/store/dogs.model';

export default ({
  props: {
    dog: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
  img {
    max-width: 100%;
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
