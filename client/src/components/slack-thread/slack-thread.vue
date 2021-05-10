<template>
  <div class="slack-thread">
    <div class="slack-item">
      <img class="slack-item-image" src="../../../../server/images/dogs/Effy.jpg" alt="">
      <div class="slack-item-text">Got my lil boo some munchis</div>
    </div>
    <div class="slack-item">
      <img class="slack-item-image" src="../../../../server/images/dogs/bubbles.jpg" alt="">
      <div class="slack-item-text">Marley got her first ever haircut</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SlackThread',
};
</script>

<style lang="scss" scoped>

.slack-thread {
  display: flex;
  padding: 0 20px;
}

.slack-item {
  display: flex;
  align-items: center;
}

.slack-item-image {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding: 0 10px;
}
</style>
