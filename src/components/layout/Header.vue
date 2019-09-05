<template>
    <div class="content-header">
        <!-- <div class="progress">
        <div class="progress-bar bg-success" style="width:70%"></div>
        </div> -->
        <header class="header-area"> 
            <div class="header-wrap">
                <div class="header-top d-flex justify-content-between align-items-lg-center navbar-expand-lg">
                    <div class="col-4 text-lg-center mt-2 mt-lg-0">
                    <span class="logo-outer">
                        <span class="logo-inner">
                        <router-link
                            tag ="a"
                            to="/"
                        ><img class="mx-auto"  alt="" src="@/assets/logoBIT.png" width="150px" 
                        /></router-link>
                        </span>
                    </span>
                    </div>

                     <nav class="col navbar navbar-expand-lg justify-content-end">
                        <!-- Toggler/collapsibe Button -->
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsibleNavbar"
                        >
                            <span class="lnr lnr-menu"></span>
                        </button>

                        <!-- Navbar links -->
                        <div
                            class="collapse navbar-collapse menu-right"
                            id="collapsibleNavbar"
                        >
                            <ul class="navbar-nav justify-content-center w-100">
                                <li class="nav-item">
                                <router-link
                                    tag="a"
                                    class="nav-link"
                                    to="/member"
                                >Blog</router-link>
                            </li>
                            <li class="nav-item">
                                 <router-link
                                    tag="a"
                                    class="nav-link"
                                    to="/member"
                                >Services</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    tag="a"
                                    class="nav-link"
                                    to="/member"
                                >Achiments</router-link>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <router-link
                                    tag="a"
                                    class="nav-link dropdown-toggle"
                                    id="navbardrop"
                                    data-toggle="dropdown"
                                    to="/about"
                                >About Us </router-link>
                                <div class="dropdown-menu">
                                    <router-link
                                        tag="a"
                                        class="dropdown-item"
                                        to="/about"
                                    >Team BI'T</router-link>
                                    <div class="dropdown-divider"></div>
                                    <router-link
                                        tag="a"
                                        class="dropdown-item"
                                        to="/member"
                                    >Members</router-link>
                                    <div class="dropdown-divider"></div>
                                    <router-link
                                        tag="a"
                                        class="dropdown-item"
                                        to="/about"
                                    >Contact Us</router-link>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </nav>
                    
                    </div> 
            </div>
             
        </header>
    </div>
</template>

<script>
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header-area {
         background-color:  rgb(72, 206, 72);
    }
    .dropdown-menu {
         background-color: rgb(83, 245, 83);
    }
</style>
