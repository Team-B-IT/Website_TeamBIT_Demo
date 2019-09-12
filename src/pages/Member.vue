<template>
  <div class="content">
    <app-banner v-bind:title="title" v-bind:nd="nd"></app-banner>
    <div class="row row1">
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="vuong" v-bind:position="vuong_pos" ></app-member-card>
       </div>
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="hieu" v-bind:position="hieu_pos"></app-member-card>
       </div>
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="cuong_b" v-bind:major="cnpm"></app-member-card>
       </div>
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="an_b" v-bind:major="ktmt"></app-member-card>
       </div>
    </div>
    <div class="row row2">
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="cuong_n" v-bind:major="ktmt" ></app-member-card>
       </div>
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="duy_nc" v-bind:major="ktmt"></app-member-card>
       </div>
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="hoang_ph" v-bind:major="ktmt" v-bind:position="hoang_pos" ></app-member-card>
       </div>
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="kien_pt" ></app-member-card>
       </div>
    </div>
    <div class="row row3">
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="quang" v-bind:major="httt" ></app-member-card>
       </div>
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="vu_dt" v-bind:major="httt"></app-member-card>
       </div>
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="vinh" v-bind:major="ktmt"></app-member-card>
       </div>
       <div class="col-xs-6 col-sm-3" > 
        <app-member-card v-bind:name="lien" v-bind:position="lien_pos" v-bind:major="lien_major"></app-member-card>
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
      nd: "Team B'IT",
      vuong: "Dang Xuan Vuong",
      vuong_pos: "Leader",
      vuong_major: "Computer Science and Computer engineering",
      hieu: "Nguyen Trung Hieu",
      hieu_pos: "Sub Leader",
      cuong_b: "Bui Phan Thanh Cuong",
      cuong_n: "Nguyen Manh Cuong",
      an_b: "Bui Ngoc An",
      duy_nc: "Nguyen Cao Duy",
      hoang_ph: "Phan Huy Hoang",
      hoang_pos: "Tau Hai",
      kien_pt: "Phan Trung Kien",
      lien: "Pham Thi Phuong Lien",
      lien_pos: "Designer + Co-founder",
      quang: "Vu Tien Quang",
      vinh: "Ton Thien Vinh",
      vu_dt: "Dang Tri Vu",
      lien_major: "",
      ktmt: "Computer engineering",
      httt: "Information system",
      cnpm: "Software technology"
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