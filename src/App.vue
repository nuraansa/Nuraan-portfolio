<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script>
import Nav from '@/components/NavComp.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Nav, Footer
  }
}
</script>

<style>
#app {
  font-family:  'Caprasimo';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2F5D62;
}

html,
body{
  overflow-x:hidden;
}

::-webkit-scrollbar{
  display: none;
}
</style>
