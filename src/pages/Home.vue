<template>
  <div class="contenter">
    <app-banner></app-banner>
    <br>
    <section>
      <div class="alert alert-info" role="alert" style="text-align: center">
       <h2> Welcome to team B'IT! Alo</h2>
      </div>
    </section>  
  </div>
</template>
<script>

import Banner from '../components/layout/BannerHome.vue';

export default {
  components: {
    appBanner: Banner,
  },
  data: function() {
    return {
      title: "Team B'IT"
    }
  }
}
</script>

<style scoped>
</style>