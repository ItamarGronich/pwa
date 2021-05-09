<template>
  <div id="app">
    <app-header class="app-header" />
    <router-view class="app-content"/>
    <nav-bar class="nav-bar" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: { NavBar, AppHeader },
};
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.app-header {
  flex: 0 50px;
}

.app-content {
  flex: 1;
  overflow: auto;
  background: white;
}

.nav-bar {
  flex: 0 50px;
}
</style>

<style lang="scss">
@import "styles/color-palette.scss";

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: $primary;
}
</style>
