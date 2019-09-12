<template>
  <div>
    <app-banner v-bind:title="title" v-bind:nd="nd"></app-banner>
    <app-visit></app-visit>
  </div>
</template>

<script>

import BannerHome from '../components/layout/Banner.vue';
import Visit from '../components/Visit.vue';
export default {
  components: {
    appBanner: BannerHome,
    appVisit: Visit,
  },
  data: function() {
    return {
      title: 'Visit Us',
      nd: 'Address: HaNoi, Viet Nam',
    }
  }
}
</script>

<style scoped>

</style>