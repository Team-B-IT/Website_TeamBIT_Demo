<template>
  <div class="content-banner">
    <section class="banner-area relative">
      <div class="overlay overlay-bg"></div>
        <div class="banner-content text-center">
          <h1>{{ title }}</h1>
          <h3 class="nd">{{ nd }}</h3>
        </div>
    </section>
  </div>
</template>

<script>
    //Props dung de truyen du lieu tu component cah sang com con truyen thong bao den cac com cha 
    //thong qua cac su kien
    export default {
            props: {
                title: {
                    type: String
                },
                nd: {
                    type: String,
                    default: "Team B'IT"
                }
            }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .h3 {
        color: aliceblue;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }
    .nd {
        color: white;
    }
</style>