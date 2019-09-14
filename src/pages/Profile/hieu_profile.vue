<template>
  <div>
    <app-banner v-bind:title="title" v-bind:nd="nd"></app-banner>
    <h1>Hieu oc</h1>
  </div>
</template>

<script>

import BannerHome from '../../components/layout/Banner.vue';

export default {
  components: {
    appBanner: BannerHome,
  },
  data: function() {
    return {
      title: 'Profile',
      nd: 'Nguyen Trung Hieu',
    }
  }
}
</script>

<style scoped>
</style>