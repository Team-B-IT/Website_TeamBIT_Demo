<template>
  <div>
    <app-banner v-bind:title="title" v-bind:nd="nd"></app-banner>
    <app-about-content></app-about-content>
  </div>
</template>

<script>

import BannerHome from '../components/layout/Banner.vue';
import AboutContent from '../components/About_Content';
export default {
  components: {
    appBanner: BannerHome,
    appAboutContent: AboutContent,
  },
  data: function() {
    return {
      title: 'About',
      nd: "Team B'IT",
    }
  }
}
</script>

<style scoped>
</style>