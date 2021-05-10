<template>
  <div class="navbar-wrapper">
    <div class="navbar-item" :class="{ active: isActive('home') }" @click="navigate('/')">
      <img src="/img/icons/dog-house.svg" />
    </div>
    <div class="navbar-item" :class="{ active: isActive('map') }" @click="navigate('/map')">
      <img src="/img/icons/placeholder.svg" />
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
    isActive(path) {
      const currentRoute = this.$route;
      if (currentRoute) {
        return currentRoute.name.toLowerCase() === path;
      }

      return false;
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
  transition: all 200ms ease-in-out;

  &.active {
    background: darken($primary, 20%)
  }
}
</style>
