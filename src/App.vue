<template>
  <div id="app">
    <app-header></app-header>
     <router-view/>
    <app-footer></app-footer>   
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

  export default {
    components: {
      appHeader: Header,
      appFooter: Footer,
    }
  }
</script>

<style scoped>
  #app {
    padding: 0px;
    margin: 0px;
  }
</style>
