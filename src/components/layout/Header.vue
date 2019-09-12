<template>
    <div class="content-header">
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"/>
        <header class="header-area"> 
            <div class="header-wrap">
                
                <div class="header-top d-flex justify-content-between align-items-lg-end">
                    <div class="col-5 text-lg-center mt-2 mt-sm-0" >
                        <router-link
                            tag ="a"
                            to="/"
                        >
                            <img class="mx-auto"  alt="" src="@/assets/img/logo.png" width="200px"/>
                        </router-link>
                    </div>
                    <nav class="col navbar navbar-expand-sm justify-content-end">
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
                                        to="/"
                                    >Home</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link
                                        tag="a"
                                        class="nav-link"
                                        to="/blog"
                                    >Blog</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link
                                        tag="a"
                                        class="nav-link"
                                        to="/products"
                                    >Products</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link
                                        tag="a"
                                        class="nav-link"
                                        to="/achievements"
                                    >Achievements</router-link>
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
                                            to="/visit"
                                        >Visit Us</router-link>
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
    .menu-right .nav-item .nav-link {
        font-family: 'Lato', sans-serif;
        font-size: large;
        font-weight: bolder;
        font-style: initial;
    }
    
    .menu-right:hover .nav-item:hover .nav-link:hover{
        color: #f0f0f0;
        background-image: linear-gradient(to top, #5f3162 40%, #ffffff);  
    }

    .dropdown:hover {
        background-image: linear-gradient(to top, #5f3162 40%, #ffffff);
    }

    .dropdown-menu:hover .dropdown-item:hover {
        color: #f0f0f0;
        background-color: #5f3162;
    }

    .nav-item .nav-link {
        margin:  0px;
        padding: 15px 30px 13px 30px;
    }

    .header-area {
        background-color: #f8fee9;
    }
</style>
