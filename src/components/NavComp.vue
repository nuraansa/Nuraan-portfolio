<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand " href="#"> <img src="https://i.postimg.cc/T2k5Y6VX/NSD-logo.png" class="logo" alt="logo" loading="lazy"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link> |
                    </li>
                    <li class="nav-item">
                        <router-link to="/about">About</router-link> |
                    </li>
                    <li class="nav-item">
                        <router-link to="/resume">Resume</router-link> |
                    </li>
                    <li class="nav-item">
                        <router-link to="/projects">Projects</router-link> |
                    </li>
                    <li class="nav-item">
                        <router-link to="/testimonials">Testimonials</router-link> |
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    background: #5E8B7E;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
}

nav a {
    color: #DFEEEA;
    padding: 1rem;
    text-decoration: none;
}

nav a:hover {
    color: #2F5D62;
}

nav a.router-link-exact-active {
    color: #2F5D62;
}

.logo {
    width: 9rem;
}
</style>