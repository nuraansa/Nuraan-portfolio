<template>
    <div class="bg">
        <h1 class="display-3 p-5">Contact Me</h1>
        <div class="container form mx-auto shadow-lg">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control mx-auto" id="exampleFormControlInput1" placeholder="name & surname">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Email address</label>
                <input type="email" class="form-control mx-auto" id="exampleFormControlInput2" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control mx-auto" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn res">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg {
    background: #A7C4BC;
    height: 100vh;
}
.form{
    background-color: #5E8B7E;
    width: 30rem;
    padding: 2rem;
}
.form-control{
    width: 20rem;
}
h1 {
  text-shadow: 2px 2px #DFEEEA;
}
.form-label{
    color: #DFEEEA;
}
.res {
    text-decoration: none;
    color: #5E8B7E; 
    background:  #A7C4BC;
}

.res:hover {
    background:  #5E8B7E;
    color:  #DFEEEA;
    border: 3px solid #DFEEEA;
    text-decoration: none;
}
</style>