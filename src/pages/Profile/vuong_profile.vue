<template>
  <div>
    <app-banner v-bind:title="title" v-bind:nd="content"></app-banner>
    <app-profile>
      <img class="avatar" alt="" src="@/assets/img/instagram/teambit3.jpg">
    </app-profile>
  </div>
</template>

<script>

import BannerHome from '../../components/layout/Banner.vue';
import Profile from '../../components/Profile.vue'

export default {
  components: {
    appBanner: BannerHome,
    appProfile: Profile
  },
  data: function() {
    return {
      title: 'Profile',
      content: 'Dang Xuan Vuong',
    }
  }
}
</script>

<style scoped>
</style>