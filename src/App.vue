<template>
  <Navbar />

  <img alt="Vue logo" src="./assets/logo.png">

  <!-- Equivalente al <router-outlet></router-outlet> de Angular -->
  <router-view></router-view>

</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
// import Navbar from './modules/shared/components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    // Navbar
    // Así se hace el lazyload de un componente aquí
    Navbar: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */ '@/modules/shared/components/Navbar.vue'))
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
