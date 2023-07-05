<template>
    <div class="bg">
        <h1 class="display-3 p-3">Reach out to me!</h1>
        <div class="container form mx-auto">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name & surname">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
    background: #C4D7B2;
    height: 100vh;
}

.res {
    text-decoration: none;
    color: #DFEEEA; 
    background:  #45935f;
}

.res:hover {
    background:  #7bce97;
    color:  #45935f;
    border: 2px solid #5E8B7E;
    text-decoration: none;
}
</style>