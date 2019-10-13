<template>
  <div>
    <app-banner v-bind:title="title" v-bind:nd="content"></app-banner>
    <Profile :profile="profile" >
      <img class="avatar" alt="" src="@/assets/img/instagram/cuongnm.jpg">
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
      content: 'Nguyen Manh Cuong',
      profile: {
        name: "Nguyen Manh Cuong",
        major: "Computer Engineering",
        phone: "+84 xxx xxxx",
        email: "@gmail.com",
        gitHub: "...",
        codeforces: "...",
        age: 21,
        gender: "YAG",
        address: "Ha Noi",
        university: "HUST"
      }
    }
  }
}
</script>

<style scoped>
</style>