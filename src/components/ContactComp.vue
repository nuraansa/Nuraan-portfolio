<template>
    <div class="bg">
        <h1 class="display-3 p-5">Contact Me</h1>
        <div class="container-fluid">
            <div class="container form shadow-lg">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input type="text" class="form-control mx-auto" id="exampleFormControlInput1"
                        placeholder="name & surname" required>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Email address</label>
                    <input type="email" class="form-control mx-auto" id="exampleFormControlInput2"
                        placeholder="name@example.com" required>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control mx-auto" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <div class="col-auto p-3">
                    <button type="submit" class="btn res">Submit</button>
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
.bg {
    background: #A7C4BC;
    height: 100vh;
}

.form {
    background-color: #5E8B7E;
    width: 30rem;
    margin: 0 !important;
    padding: 2rem;
}

@media (width < 400px){
    .form{
        width:23rem;
        padding:1rem;
    }
}

@media (width < 368px){
    .form{
        width:100% !important;
        padding:0;
    }
    .container-fluid{
        padding:2px;
    }
}

.container-fluid{
    display:flex;
    justify-content: center;
    align-items:center;
}
.form-control {
    width:90%;
}

h1 {
    text-shadow: 2px 2px #DFEEEA;
}

.form-label {
    color: #DFEEEA;
}

.res {
    text-decoration: none;
    color: #5E8B7E;
    background: #A7C4BC;
}

.res:hover {
    background: #5E8B7E;
    color: #DFEEEA;
    border: 3px solid #DFEEEA;
    text-decoration: none;
}</style>