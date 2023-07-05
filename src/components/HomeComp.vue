<template>
    <div class="home">
      <h1 class="display-1 me p-5">Nuraan <br> Samodien <br> Davids</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.home{
    background-image: url(https://i.postimg.cc/pd2gdVhR/bg.jpg);
    background-size: cover;
    height: 100vh;
  }
.me {
    white-space: nowrap;
    overflow: hidden;
    width: 50%;
    animation: typing 1.9s steps(25), cursor 0.4s step-end infinite alternate;
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
</style>