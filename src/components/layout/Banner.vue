<template>
    <div class="content-banner">
    <section class="banner-area relative">
    	<div class="overlay overlay-bg"></div>
    		<div class="banner-content text-center">
        		<h1>{{ title }}</h1>
        		<h3 id="nd">{{ nd }}</h3>
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
                    type: Object,
                    required: true,
                    default: "Team B'IT",
                },
                nd: {
                    type: String,
                    required: false,
                }
            }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nd {
    color: white;
}
</style>