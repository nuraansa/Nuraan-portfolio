<template>
    <div class="bg">
        <h1 class="display-1 text-center p-4">Resume</h1>
        <!-- <div class="container text-start">
            <div class="card p-5 in">
                <div class="row mx-auto">
                    <div class="col-6">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">DOB: 14 February 2000</li>
                            <li class="list-group-item">Linkedin: </li>
                            <li class="list-group-item">Email: nuraansa1@gmail.com</li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">City: Cape Town</li>
                            <li class="list-group-item">Cell: 012-345-6789</li>
                            <li class="list-group-item">Language: English</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="container p-1 text-start w-50">
            <div class="row border-bottom" style="margin: 25px; margin-top: 10px; font-size: 20px">
                <div class="col border-end"></div>
                <div class="col"></div>
            </div>
            <div class="row border-bottom" style="margin: 20px; margin-top: 10px; font-size: 20px">
                <div class="col border-end">DOB: 14 February 2000</div>
                <div class="col">Age: 22</div>
            </div>
            <div class="row border-bottom" style="margin: 20px; font-size: 20px">
                <div class="col border-end">City: Cape Town</div>
                <div class="col">Email: nuraansa1@gmail.com</div>
            </div>
            <div class="row border-bottom" style="margin: 20px; font-size: 20px">
                <div class="col border-end">Language: English</div>
                <div class="col">Cell: 012-345-6789</div>
            </div>
        </div>

        <div class="container" id="res1">
            <h1 class="display-3 p-3">Education</h1>
            <div class="card p-4 edu text-start shadow-lg mx-auto">
                <div class="row g-0">
                    <div class="col-md-8" v-for="item in education" :key="item.id">
                        <div class="card-body ex">
                            <h5 class="card-title">{{ item.year }}</h5>
                            <p class="card-text">{{ item.description }}</p>
                            <hr>
                        </div>
                    </div> 
                    <div class="col-md-4" id="imagee">
                        <img src="https://i.postimg.cc/MGsGH8GH/asal-lotfi-8e-PZbdxnpi0-unsplash.jpg" alt="img"
                            class="w-100 book">
                        <!-- <img src="https://i.postimg.cc/bJwBtJb3/reading.jpg" class="img-fluid" alt="..."> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <h1 class="display-3 p-3">Experience</h1>
            <div class="card p-5 text-start edu mx-auto shadow-lg">
                <div class="row">
                    <div class="col" id="border" v-for="item in experience" :key="item.id">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.year }}</h5>
                            <p class="card-text">{{ item.place }}</p>
                            <p class="card-text">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1 class="display-3 p-3">Soft Skills</h1>
        <div class="container-fluid" id="soft">
        <div class="card in shadow-lg">
            <div class="row" id="row">
                <div class="col text-center">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Problem solving
                        </li>
                        <li class="list-group-item">Communication
                        </li>
                        <li class="list-group-item">Addaptability</li>
                    </ul>
                </div>
                <div class="col text-center">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Critical thinking</li>
                        <li class="list-group-item">Time management</li>
                        <li class="list-group-item">Teamwork</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <h1 class="display-3 p-3">Technical Skills</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-md-3 d-flex mx-auto g-4" id="col">
                <div class="col" id="pad" v-for="item in skills" :key="item.id">
                    <div class="card skill shadow-lg">
                        <div class="card-body">
                            <i :class="item.icon" :key="item.id" style="color: #2F5D62;"></i>
                            <h4 class="card-text">{{ item.skill }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/projects" id="res" class="btn btn-light m-3 p-3 ">View Projects</router-link>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        education() {
            return this.$store.state.education
        },
        experience() {
            return this.$store.state.experience
        },
        skills() {
            return this.$store.state.skills
        }
    },
    mounted() {
        this.$store.dispatch('fetchEducation'),
            this.$store.dispatch('fetchExperience'),
            this.$store.dispatch('fetchSkills')

    }
}
</script>

<style scoped>
.colu{
    display: flex;
    justify-content: center;
    align-items: center;
}

.bg {
    background: #A7C4BC;
}

h1 {
    text-shadow: 2px 2px #DFEEEA;
}

h4 {
    text-shadow: 2px 2px #DFEEEA;
}

.info {
    width: 45rem;
}

.ex {
    padding: 1px;
}

@media(width < 980px) {
    #res1 {
        padding: 0;
    }
}

@media (width <768px) {
    .book {
        height: 40rem !important;
        width:100% !important;
        margin-top: 0 !important;
        object-fit:fill;
        display:none;
    }
    #imagee{
        display:none;
    }

    #res1{
        width:100% !important;
    }

    .card-text{
        display:flex;
        flex-wrap:wrap;
        width:80%;
    }

    .card-body{
        padding:10px;
    }

    .edu{
        padding:0 !important;
    }
}

#col{
    margin:0 !important;
}

@media (width < 711px){
    .card-text{
        width:70%;
    }
}

@media(width<622px){
    .card-text{
        width:60%;
    }
}

#border{
    border-right:1px solid black;
}




@media (width < 580px){
    .card-text{
        width:50%;
    }
}

@media (width < 469px){
    .card-text{
        width:40%;
    }
}

@media (width<392px){
    .card-text{
        width:30%;
        margin-right:0 !important;
    }
}
@media (width<293){
    .card-text{
        width:19%;
    }
}
@media (width<690px){
    li{
        width:100% !important;
    }
}

.edu {
    background-color: #DFEEEA;
    width: 60rem;
}

#pad{
    padding:1rem !important;
}

#soft{
    padding:0;
}

.card-body{
    padding:0;
    width:100% !important;
    height:100% !important;
}

.book {
    margin-top: -24rem;
}

.list-group-item {
    width: 100%;
}

.skill {
    background-color: #A7C4BC;
    margin-bottom: 2rem;
}

#res {
    text-decoration: none;
    color: #DFEEEA;
    background: #5E8B7E;
}

.text-start{
    width:100%;
}

#soft{
    margin:0 !important;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.p-5{
    width:100% !important;
}

@media (width < 690px){
    #row{
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
}

.in{
    width:100%;
}

#res:hover {
    background: #DFEEEA;
    color: #5E8B7E;
    border: 2px solid #5E8B7E;
    text-decoration: none;
}
</style>