<template>
  <div class="footer">
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col order-first">
          <h6 class="p-3">
            Copyright &copy; 2023
          </h6>
        </div>
        <div class="col p-4">
          <div class="media-icons">
            <a href="https://github.com/nuraansa"><i class="fa-brands fa-github fa-2xl"></i></a>
            <a href="https://www.linkedin.com/in/nuraan-samodien-154315282/"><i
                class="fa-brands fa-linkedin fa-2xl"></i></a>
          </div>
        </div>
        <div class="col order-last p-3"> <p>nuraansa1@gmail.com <br> +27 71 876 3680</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-fluid {
  width: 100%;
  height: 100%;
  background-color: #5E8B7E;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.media-icons {
  text-align: center;
}

.fa-brands:hover {
  color: #2F5D62;
  font-size: 3rem;
}

h6 {
  margin-top: 1rem;
  color: #DFEEEA;
}

.order-last {
  color: #DFEEEA;
}

i {
  color: #DFEEEA;
  margin: 1rem;
}

.footer{
  width: 100%;
  height: 100%;
}
</style>