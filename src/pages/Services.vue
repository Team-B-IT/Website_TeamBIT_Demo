<template>
  <div>
    <app-banner v-bind:title="title" v-bind:nd="content"></app-banner>
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
      title: 'Services',
      content: "Team B'IT",
    }
  }
}
</script>

<style scoped>
</style>