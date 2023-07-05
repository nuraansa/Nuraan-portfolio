<template>
    <div class="bg">
        <h1 class="display-1 text-center p-5">Resume</h1>
        <div class="container text-start">
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
                <!-- <div class="card-footer">
               
            </div> -->
            </div>
        </div>
        <div class="container">
            <h1 class="display-3 p-3">Education</h1>
            <div class="card p-4 edu text-start border">
                <div class="row g-0">
                    <div class="col-md-8" v-for="item in education" :key="item.id">
                        <div class="card-body ex">
                            <h5 class="card-title">{{ item.year }}</h5>
                            <p class="card-text">{{ item.description }}</p>
                        </div>
                        <hr>
                    </div>
                    <div class="col-md-4">
                        <img src="https://i.postimg.cc/MGsGH8GH/asal-lotfi-8e-PZbdxnpi0-unsplash.jpg" alt="img" class="w-100 book">
                        <!-- <img src="https://i.postimg.cc/bJwBtJb3/reading.jpg" class="img-fluid" alt="..."> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="container p-2">
            <div class="card p-3">
                <div class="row">
                    <h1>Experience</h1>
                    <hr>
                    <div class="col-md-4">
                        <!-- <img src="https://i.postimg.cc/bJwBtJb3/reading.jpg" class="img-fluid" alt="..."> -->
                    </div>
                    <div class="col-md-8" v-for="item in experience" :key="item.id">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.year }}</h5>
                            <p class="card-text">{{ item.place }}</p>
                            <p class="card-text">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mx-auto" style="width: 50rem;">
            <div class="card-header">
                Soft Skills
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
        </div>
        <div class="container mx-auto">
            <h1>Technical Skills</h1>
            <div class="row">
                <div class="col" v-for="item in skills" :key="item.id">
                    <div class="card" style="width: 18rem;">
                        <img :src="item.image" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">{{ item.skill }}</p>
                        </div>
                    </div>
                </div>
            </div>
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
.bg {
    background: #A7C4BC;
}
h1 {
  text-shadow: 2px 2px #DFEEEA;
}
.in{
    background-color: #DFEEEA;
}
.ex{
    padding: 0.5px;
}
.edu {
    background-color: #DFEEEA;
}
.book{
    margin-top: -24rem;
}
.list-group-item{
    width: 20rem;
}
</style>