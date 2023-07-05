<template>
        <nav>
            <img src="https://i.postimg.cc/fLMv0VCH/Black-Pink-Bold-Elegant-Monogram-Personal-Brand-Logo-removebg-preview.png"
            alt="logo" id="logo">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/resume">Resume</router-link> |
            <router-link to="/projects">Projects</router-link> |
            <router-link to="/testimonials">Testimonials</router-link> |
            <router-link to="/contact">Contact</router-link>
        </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    padding: 20px;
    background: #5E8B7E;
    font-size: 1.4rem;
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
    color: rgb(251, 248, 251);
}

#logo {
    width: 4rem;
}
</style>