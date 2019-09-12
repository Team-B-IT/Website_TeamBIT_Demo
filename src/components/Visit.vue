<template>
    <div class="content-visit">
        <section class="contact-team-area section-gap">  
           <div class="row">
                <div class="map-wrap" id="contactMap"></div>
                <div class="col-lg-4 d-flex flex-column address-wrap">
                    <div class="single-contact-address d-flex flex-row">
                    <div class="icon"><span class="lnr lnr-home"></span></div>
                    <div class="contact-details">
                        <h5> Address </h5>
                        <p>Minh Khai, Ha Noi, Viet Nam </p>
                    </div>
                    </div>
                    <div class="single-contact-address d-flex flex-row">
                    <div class="icon"><span class="lnr lnr-phone-handset"></span></div>
                    <div class="contact-details">
                        <h5> Phone </h5>
                        <p> +84 392 211 7151  </p>
                    </div>
                    </div>
                    <div class="single-contact-address d-flex flex-row">
                    <div class="icon"><span class="lnr lnr-envelope"></span></div>
                    <div class="contact-details">
                        <h5> Email </h5>
                        <p>Teambit2019@gmail.com</p>
                    </div>
                    </div>
                </div>
               <div class="col-lg-8">
                    <form
                    class="form-area contact-form text-right"
                    id="myForm"
                    action="mail.php"
                    method="post"
                    >
                    <div class="row">
                        <div class="col-lg-6 form-group">
                        <input
                            name="name"
                            placeholder="Enter your name"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter your name'"
                            class="common-input mb-20 form-control"
                            required=""
                            type="text"
                        />

                        <input
                            name="email"
                            placeholder="Enter email address"
                            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter email address'"
                            class="common-input mb-20 form-control"
                            required=""
                            type="email"
                        />

                        <input
                            name="subject"
                            placeholder="Enter subject"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter subject'"
                            class="common-input mb-20 form-control"
                            required=""
                            type="text"
                        />
                        </div>
                        <div class="col-lg-6 form-group">
                        <textarea
                            class="common-textarea form-control"
                            name="message"
                            placeholder="Enter Messege"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter Messege'"
                            required=""
                        ></textarea>
                        </div>
                        <div class="col-lg-12">
                        <div class="alert-msg" style="text-align: left;"></div>
                        <button
                            class="primary-btn text-uppercase"
                            style="float: right;"
                        >
                            Send Message
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
           </div>
        </section>
    </div>
</template>

<script>
    export default {         
            
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .address-wrap {
    padding-left: 35px;   
 }
 
</style>