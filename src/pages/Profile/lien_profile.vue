<template>
  <div>
    <app-banner v-bind:title="title" v-bind:nd="content"></app-banner>
    <Profile :profile="profile" >
      <img class="avatar" alt="" src="@/assets/img/instagram/lien.jpg">
    </Profile>
  </div>
</template>

<script>

import BannerHome from '../../components/layout/Banner.vue';
import Profile from '../../components/Profile.vue'

export default {
  components: {
    appBanner: BannerHome,
    Profile
  },
  data: function() {
    return {
      title: 'Profile',
      content: 'Pham Phuong Lien',
      profile: {
        name: "Pham Phuong Lien",
        major: "Unknown",
        phone: "+84 xxx xxxx",
        email: "@gmail.com",
        gitHub: "",
        codeforces: "",
        age: 20,
        gender: "?",
        address: "Ha Noi",
        university: ""
      }
    }
  }
}
</script>

<style scoped>
</style>