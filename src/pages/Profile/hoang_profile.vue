<template>
  <div>
    <app-banner v-bind:title="title" v-bind:nd="content"></app-banner>
    <Profile :profile="profile" >
      <img class="avatar" alt="" src="@/assets/img/instagram/hoang.jpg">
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
      content: 'Phan Huy Hoang',
      profile: {
        name: "Phan Huy Hoang",
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
</style