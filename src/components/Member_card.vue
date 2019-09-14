<template>
    <div class="container">
        <section>
         <div class="card" style="width:300px" >
            <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
            <p class="card-text">{{position}}</p>
            <p class="card-text">Major: {{major}}</p>
            <!-- <a v-bind:href= "href" class="btn btn-primary" >See Profile</a> -->
            <slot></slot>
            <!-- <router-link
                tag="a"
                class="btn btn-primary"
                to = "#"
                @click="showProfile"
            >See Profile</router-link> -->
            </div>
        </div>
        </section>
    </div>
</template>

<script>
    export default {         
         props: {
             id: Number,
             name: String,
             position: {
                 type: String,
                 default: "Co-founder team B'IT",
             },
             major: {
                 type: String
             },
             href: {
                 type: String,
                 default: '/error'
             }
         }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .card {
     margin: 10px;
     padding: 10px;
     background-color: rgb(160, 148, 148);
}
.card-title {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.card-text {
    font-style: initial;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>