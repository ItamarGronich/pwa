<template>
  <div class="profile">
    <!-- <img :src="dog.img" /> -->
    <p>{{ dog.name }}</p>
    <p>{{ dog.owner }}</p>
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
