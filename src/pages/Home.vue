<template>
  <div class="contenter">
    <app-banner-home></app-banner-home>
    <br/>
    <section>
      <h3  style="text-align: center">Halo!</h3>
      <div class="alert alert-info" role="alert">
        Welcome to team BIT!
      </div>
    </section>  
  </div>
</template>

<script>


import BannerHome from '../components/layout/BannerHome.vue';

export default {
  components: {
    appBannerHome: BannerHome,
  },
  data: function() {
    return {
      title: '',
    }
  }
}
</script>

<style scoped>
  #app {
    padding: 0px;
    margin: 0px;
  }
</style>