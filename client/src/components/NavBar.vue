<template>
  <div class="navbar-wrapper">
    <div class="navbar-item" @click="navigate('/')">
      <img src="/img/icons/dog-house.svg" />
    </div>
    <div class="navbar-item" @click="navigate('/map')">
      <img src="/img/icons/placeholder.svg" />
    </div>
    <div class="navbar-item">
      <img src="/img/icons/pawprint.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    navigate(where) {
      this.$router.push(where);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/color-palette.scss";

.navbar-wrapper {
  background: $primary;
  display: flex;
  color: white;
}

.navbar-item {
  flex: 1;
  padding: 20px;
}
</style>
