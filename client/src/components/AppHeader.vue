<template>
  <div class="header">
    <div class="menu" @click="showSidebar">
      <img src="/img/icons/pawprint.svg" />
    </div>
    <img src="../assets/logo.png" alt="">
    <div class="search">
      <img src="/img/icons/search.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    showSidebar() {
      this.$emit('showSidebar');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/color-palette.scss";

.header {
  background: $primary;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu {
  padding: 10px 0 10px 10px;
}

.search {
  padding: 15px;
}
</style>
