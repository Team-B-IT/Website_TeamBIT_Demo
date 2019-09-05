<template>
  <div class="content">
    <app-banner-home></app-banner-home>
    <section>
     <div class="alert alert-primary" role="alert"  style="text-align: center">
      Page Not Found!
    </div>
    </section>
  </div>
</template>

<script>
import BannerHome from '../components/layout/Banner.vue';
export default {
  components:{
    appBannerHome: BannerHome,
  }
}

</script>

<style scoped>
  
</style>