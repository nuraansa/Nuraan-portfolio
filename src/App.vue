<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/resume">Resume</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/testimonials">Testimonials</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view />
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&display=swap');
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
  background: rgb(233, 198, 233);
}

nav a {
  font-weight: bold;
  color: black;
  padding: 1rem;
  text-decoration: none;
}
nav a:hover{
  color: rgb(251, 248, 251);
}

nav a.router-link-exact-active {
  color: rgb(251, 248, 251);
}

</style>
