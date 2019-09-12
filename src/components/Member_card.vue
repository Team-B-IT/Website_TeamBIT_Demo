<template>
    <div class="container">
        <section>
         <div class="card" style="width:300px">
            <!-- <img class="card-img-top" src="" alt="Card Image" style="width:75%"> -->
            <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
            <p class="card-text">{{position}}</p>
            <br>
            <p class="card-text">Major: {{major}}</p>
            <a href="#" class="btn btn-primary">See Profile</a>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
    export default {         
         props: {
             name: String,
             position: {
                 type: String,
                 default: "Co-founder team B'IT",
             },
             img: String,
             major: {
                 type: String,
                 default: 'Computer Science'
             },
         }   
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .card {
     margin: 10px;
     padding: 10px;
     background-color: darkgrey;
}
.card-text {
    font-style: initial;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>