<template>
  <div class="content">
    <app-banner v-bind:title="title" v-bind:nd="nd"></app-banner>
    <div class="row">
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="name1" v-bind:img="img" ></app-member-card>
       </div>
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="name1" v-bind:img="img"></app-member-card>
       </div>
    </div>
  </div>
</template>

<script>


import BannerHome from '../components/layout/Banner.vue';
import MemberCard from '../components/Member_card.vue';
export default {
  components: {
    appBanner: BannerHome,
    appMemberCard: MemberCard,
  },
  data: function() {
    return {
      title: 'Member',
      nd: 'Team BIT',
      name1: 'Baby Boy',
      name2: 'Halo',
      img:'`i1.jpg`',
    }
  }
}
</script>

<style scoped>
  #app {
    padding: 0px;
    margin: 0px;
  }
  .row {
      max-width: 100%;
  }
  
</style>