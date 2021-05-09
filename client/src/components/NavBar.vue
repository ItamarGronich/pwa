<template>
  <div class="navbar-wrapper">
    <div class="navbar-item">Foo</div>
    <div class="navbar-item">Bar</div>
    <div class="navbar-item">Baz</div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
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
}
</style>
