<template>
    <div class="container">
        <section>
         <div class="card" style="width:250px">
            <img class="card-img-top" src="@/assets/img/instagram/i1.jpg" alt="Card Image" style="width:75%">
            <div class="card-body">
            <h4 class="card-title">{{name}}</h4>
            <p class="card-text">{{position}}</p>
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
                 default: 'Co-founder team BIT',
             },
             img: String,
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
</style>