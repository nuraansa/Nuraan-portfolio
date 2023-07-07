<template>
  <div class="home">
    <div class="container-fluid" id="background">
      <h1 class="display-1 me p-5">Nuraan <br> Samodien <br> Davids</h1>
      <h2 class="display-6 p-2 me port">Aspiring Web Developer</h2> <br>
      <h2 class="display-5 p-3 me port"><router-link to="/about">Portfolio<br> ⟶ </router-link></h2>
    </div>
  </div>
  <div class="home-page">
    <div class="left">
      <div class="text-left">
      <h1 class="display-1 me p-5 me-2">Nuraan <br> Samodien <br> Davids</h1>
      <h2 class="display-6 p-2 me port">Aspiring Web Developer</h2> <br>
      <h2 class="display-5 p-3 me "><router-link to="/about">Portfolio<br> ⟶ </router-link></h2>
    </div>
    </div>
    <div class="right">
      <!-- <img src="https://i.postimg.cc/qRDyh5fn/bg1.jpg" alt=""> -->
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

h2 a {
  color: #2F5D62;
  padding: 1rem;
  text-decoration: none;
}

h2 a:hover {
  color: #6d9498;
  text-shadow: 2px 2px #2F5D62;
}

.me {
  text-shadow: 2px 2px #6d9498;
  white-space: nowrap;
  overflow: initial;
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
.home-page{
  display: none;
}

@media screen and (max-width: 650px) {
  .home-page{
    visibility: visible;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .left{
    width: 60%;
    background-image: url(https://i.postimg.cc/wMSNFRjj/bg.jpg);
    height: 100vh;
    /* border: 1px solid red; */
    background-size: cover;
    background-repeat: no-repeat;
  }
  .right{
    width: 40%;
    background-image: url(https://i.postimg.cc/qRDyh5fn/bg1.jpg);
    height: 100vh;
    /* border: 1px solid red; */
    background-size: cover;
    background-repeat: no-repeat;
  }

  .text-left{
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    flex-wrap: wrap;
    /* border: 1px solid white; */
    height: 100%;
  }

  .me-2{
    font-size: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2{
    font-size: 2rem;
  }

  .me {
  text-shadow: 2px 2px #6d9498;
  white-space: nowrap;
  overflow: initial;
  /* width: 25%; */
  animation: typing 1.4s steps(20), cursor 0.4s step-end infinite alternate;
}

.port{
  display: none;
}


  .home{
    display: none;
  }
}
</style>