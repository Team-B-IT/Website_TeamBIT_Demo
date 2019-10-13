<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <h5>Profile</h5>
        <ul class="list-group">
          <li class="list-group-item">Name: {{ profile.name }}</li>
          <li class="list-group-item">Major: {{ profile.major }}</li>
          <li class="list-group-item">Team B'IT</li>
          <li class="list-group-item"><i class="fa fa-phone"></i> {{ profile.phone }} </li>
          <li class="list-group-item"><i class="fa fa-envelope"></i> {{ profile.email }} </li>
          <li class="list-group-item">GitHub: {{ profile.gitHub }}</li>
          <li class="list-group-item">Codeforces: {{ profile.codeforces }}</li>
        </ul>
        <br>
        <h5>More</h5>
        <ul class="list-group">
          <li class="list-group-item">Age: {{ profile.age }}</li>
          <li class="list-group-item">Gender: {{ profile.gender }}</li>
          <li class="list-group-item">Address: {{ profile.address }}</li>
          <li class="list-group-item">University: {{ profile.university }}</li>
        </ul>
      </div>
    <div class="col-sm-9">         
      <!-- resumt -->
      <div class="bs-callout bs-callout-danger">
        <div class="panel-heading resume-heading">
          <div class="row">
            <div class="col-lg-12">
              <div class="col-xs-12 col-sm-12">
              <figure>
                  <slot></slot>
              </figure>
                        
              </div>
            </div>
          </div>
        </div>
        
        <div class="bs-callout bs-callout-danger">
          <h4>About me</h4>
          <p></p>
        </div>

        <div class="bs-callout bs-callout-danger">
          <h4>Summary</h4>
          <p></p>
        </div>

      </div>
    </div>
      <!-- resume -->
    </div>
  </div>
</template>

<script>
  export default {         
    props: {
      profile: {
        type: Object,
        default: {
          name: "",
          major:'',
          phone: '',
          email: '',
          gitHub: '',
          codeforces: '',
          age: 18,
          gender: '',
          address: '',
          university: ''
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .awards {
    padding-left: 30px;
  }
  .award {
    padding-bottom: 5px;
  }
  
 .container {
   margin: 10px;
   padding: 20px;
 }
 .list-group .progress-type {
   text-align: center;
 }
 .bs-callout {
    padding: 20px;
    margin: 20px 0;
    border: 1px solid #eee;
    border-left-width: 5px;
    border-radius: 3px;
  }
  .bs-callout-danger {
    border-left-color: #d9534f;
  }
  .avatar {
  vertical-align: middle;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  /* text-align: center; */
 }
 hr { 
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 0.5px;
} 

</style>