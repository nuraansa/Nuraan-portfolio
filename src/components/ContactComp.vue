<template>
    <div class="bg">
        <div class="row justify-content-center">
            <h1 class="display-3 p-5" data-aos="zoom-in">Contact Me</h1>
            <form action="https://formspree.io/f/mrgwgbkq" method="POST">
                <div class="container-fluid" data-aos="zoom-in">
                    <div class="container form shadow-lg rounded">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input type="text" class="form-control mx-auto" id="exampleFormControlInput1"
                                placeholder="Enter Full Name" name="name" minlength="3" maxlength="20" required
                                oninvalid="this.setCustomValidity('Please Enter Your Name')"
                                oninput="this.setCustomValidity('')">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput2" class="form-label">Email address</label>
                            <input type="email" class="form-control mx-auto" id="exampleFormControlInput2"
                                placeholder="name@example.com" name="email" minlength="3" maxlength="20" required
                                oninvalid="this.setCustomValidity('Please Enter Your Email')"
                                oninput="this.setCustomValidity('')">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control mx-auto" placeholder="Enter message here"
                                id="exampleFormControlTextarea1" name="text" rows="3" minlength="3" maxlength="20" required
                                oninvalid="this.setCustomValidity('Please Enter A Message')"
                                oninput="this.setCustomValidity('')"></textarea>
                        </div>
                        <div class="col-auto p-3">
                            <button type="submit" class="btn res m-1">Submit</button>
                            <button type="reset" class="btn res">Clear</button>
                        </div>
                    </div>
                </div>
            </form>
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

.list-group-item {
    background-color: #5E8B7E;
    color: #DFEEEA;
}

.form {
    background-color: #5E8B7E;
    width: 30rem;
    margin: 0 !important;
    padding: 2rem;
}

@media (width < 400px) {
    .form {
        width: 23rem;
        padding: 1rem;
    }
}

@media (width < 368px) {
    .form {
        width: 100% !important;
        padding: 0;
    }

    .container-fluid {
        padding: 2px;
    }
}

.container-fluid {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-control {
    width: 90%;
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
}
</style>