<template>
  <div>
    <app-banner v-bind:title="title" v-bind:nd="nd"></app-banner>
  </div>
</template>

<script>

import BannerHome from '../components/layout/Banner.vue';

export default {
  components: {
    appBanner: BannerHome,
  },
  data: function() {
    return {
      title: 'Blog',
      nd: 'Sharing about experience Studying, Working, ...',
    }
  }
}
</script>

<style scoped>
</style>