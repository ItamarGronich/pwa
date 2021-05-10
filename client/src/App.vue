<template>
  <div id="app">
    <app-header class="app-header" @showSidebar="showSidebar"  />
    <router-view class="app-content"/>
    <nav-bar class="nav-bar"/>
    <div class="hidden">
      <vs-sidebar
        absolute
        :open.sync="sidebarVisible"
        >
        <vs-sidebar-item id="home">
          <template #icon>
            <img src="/img/icons/settings.png" style="width:25px;height:25px;">
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="market">
          <template #icon>
            <img src="/img/icons/adopt.png" style="width:25px;height:25px;">
          </template>
          Adopt a dog
        </vs-sidebar-item>
        <vs-sidebar-item id="Music">
          <template #icon>
            <img src="/img/icons/music.png" style="width:25px;height:25px;">
          </template>
          Dog music
        </vs-sidebar-item>
        <vs-sidebar-item id="donate">
          <template #icon>
            <img src="/img/icons/donate.jpg" style="width:25px;height:25px;">
          </template>
          Donate
        </vs-sidebar-item>
        <vs-sidebar-item id="chat">
          <template #icon>
            <img src="/img/icons/chat.png" style="width:25px;height:25px;">
          </template>
          Chat
        </vs-sidebar-item>
      </vs-sidebar>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AppHeader from './components/AppHeader.vue';
// import { ad } from '@fortawesome/fontawesome-free'
export default {
  components: { NavBar, AppHeader },
  data() {
    return {
      sidebarVisible: false,
    };
  },
  methods: {
    showSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
  },
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
  flex: 0 80px;
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
