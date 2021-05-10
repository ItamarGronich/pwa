<template>
  <div class="header">
    <img src="../assets/logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
@import "../styles/color-palette.scss";

.header {
  background: $primary;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
