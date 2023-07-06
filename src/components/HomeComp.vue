<template>
  <div class="home">
    <div class="container-fluid" id="background">
      <h1 class="display-1 me p-5">Nuraan <br> Samodien <br> Davids</h1>
      <h2 class="display-5 m-3 me port">Portfolio <br> ⟶</h2>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  position: relative;
}

.me {
  white-space: nowrap;
  overflow: hidden;
  width: 50%;
  animation: typing 1.4s steps(20), cursor 0.4s step-end infinite alternate;
}

@keyframes cursor {
  50% {
    border-color: transparent;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
}

#background {
  width: 100%;
  height: 100vh;
  background-image: url(https://i.postimg.cc/6qgKqzcy/homepage.png);
  background-size: cover;
}

</style>