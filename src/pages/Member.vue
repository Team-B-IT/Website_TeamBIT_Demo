<template>
  <div class="content">
    <app-banner v-bind:title="title" ></app-banner>
    <br>
    <h3 style="text-align: center">OUR TEAM</h3>
    <hr>
    <div class="row pt-md">
      <div class="row row1">
        <div class="col-xs-6 col-sm-3" > 
          <MemberCard 
            v-bind:name="vuong.name" 
            v-bind:position="vuong.pos" 
            v-bind:major="vuong.major">
            <router-link
              tag="a"
              class="btn btn-primary"
              to="/vuongProfile"
            >See Profile</router-link>
          </MemberCard>
        </div>
        <div class="col-xs-6 col-sm-3" > 
          <MemberCard v-bind:name="hieu.name" v-bind:position="hieu.pos" v-bind:major="hieu.major">
            <router-link
              tag="a"
              class="btn btn-primary"
              to="/hieuProfile"
            >See Profile</router-link>
          </MemberCard>
        </div>
        <div class="col-xs-6 col-sm-3" > 
          <MemberCard v-bind:name="an.name" v-bind:major="an.major">
            <router-link
              tag="a"
              class="btn btn-primary"
              to="/anProfile"
            >See Profile</router-link>
          </MemberCard>
        </div>
        <div class="col-xs-6 col-sm-3" > 
          <MemberCard v-bind:name="cuong_b.name" v-bind:major="cuong_b.major">
            <router-link
              tag="a"
              class="btn btn-primary"
              to="/cuongbptProfile"
            >See Profile</router-link>
          </MemberCard>
        </div>
      </div>
      <div class="row row2">
        <div class="col-xs-6 col-sm-3" > 
          <MemberCard v-bind:name="cuong_n.name" v-bind:major="cuong_n.major" >
            <router-link
              tag="a"
              class="btn btn-primary"
              to="/cuongnmProfile"
            >See Profile</router-link>
          </MemberCard>
        </div>
        <div class="col-xs-6 col-sm-3" > 
          <MemberCard v-bind:name="duy.name" v-bind:major="duy.major">
            <router-link
              tag="a"
              class="btn btn-primary"
              to="/duyProfile"
            >See Profile</router-link>
          </MemberCard>
        </div>
        <div class="col-xs-6 col-sm-3" > 
          <MemberCard v-bind:name="hoang.name" v-bind:major="hoang.major" v-bind:position="hoang.pos" >
            <router-link
              tag="a"
              class="btn btn-primary"
              to="/hoangProfile"
            >See Profile</router-link>
          </MemberCard>
        </div>
        <div class="col-xs-6 col-sm-3" > 
          <MemberCard v-bind:name="kien.name" v-bind:major="kien.major" v-bind:position="kien.pos">
            <router-link
              tag="a"
              class="btn btn-primary"
              to="/kienProfile"
            >See Profile</router-link>
          </MemberCard>
        </div>
      </div>
      <div class="row row3">
        <div class="col-xs-6 col-sm-3" > 
          <MemberCard v-bind:name="quang.name" v-bind:major="quang.major" >
            <a class="btn btn-primary" >See Profile</a>
          </MemberCard>
        </div>
        <div class="col-xs-6 col-sm-3" > 
          <MemberCard v-bind:name="lien.name" v-bind:major="lien.major" v-bind:position="lien.pos">
            <router-link
              tag="a"
              class="btn btn-primary"
              to="/lienProfile"
            >See Profile</router-link>
          </MemberCard>
        </div>
        <div class="col-xs-6 col-sm-3" > 
          <MemberCard v-bind:name="vinh.name" v-bind:major="vinh.major">
            <router-link
              tag="a"
              class="btn btn-primary"
              to="/vinhProfile"
            >See Profile</router-link>
          </MemberCard>
        </div>
        <div class="col-xs-6 col-sm-3" > 
          <MemberCard v-bind:name="vu.name" v-bind:major="vu.major">
            <router-link
              tag="a"
              class="btn btn-primary"
              to="/vuProfile"
            >See Profile</router-link>
          </MemberCard>
        </div>
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
    MemberCard,
  },
  data: function() {
    return {
      title: "Member",
      vuong: {
        name: "Dang Xuan Vuong",
        pos: "Leader",
        major: "Computer Science",
        href: '/vuongProfile'
      },
      hieu: {
        name: "Nguyen Trung Hieu",
        pos: "Sub-Leader",
        major: "Computer Science ",
        href: '/hieuProfile'
      },
      an: {
        name: "Bui Ngoc An",
        pos: "Co-Founder",
        major: "Computer Engineering"
      },
      cuong_b: {
        name: "Bui Phan Thanh Cuong",
        pos: "Co-Founder",
        major: "Software Technology"
      },
      cuong_n: {
        name: "Nguyen Manh Cuong",
        pos: "Co-Founder",
        major: "Computer Engineering"
      },
      duy: {
        name: "Nguyen Cao Duy",
        pos: "Co-Founder",
        major: "Computer Engineering"
      },
      hoang: {
        name: "Phan Huy Hoang",
        pos: "Tau Hai",
        major: "Computer Engineering"
      },
      kien: {
        name: "Phan Trung Kien",
        pos: "Co-Founder",
        major: "Computer Science"
      },
      lien: {
        name: "Pham Thi Phuong Lien",
        pos: "Co-Founder + Designer",
        major: "..."
      },
      quang: {
        name: "Vu Tien Quang",
        pos: "Co-Founder",
        major: "Information System"
      },
      vinh: {
        name: "Ton Thien Vinh",
        pos: "Co-Founder",
        major: "Computer Engineering"
      },
      vu: {
        name: "Dang Tri Vu",
        pos: "Co-Founder",
        major: "Information System"
      },
    }
  }
}
</script>

<style scoped>
  .row {
      max-width: 100%;
  }
  .container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>