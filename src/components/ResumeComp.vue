<template>
    <div class="bg">
        <h1 class="p-3">Resume</h1>
        <div class="container">
            <div class="card p-5">
                <div class="row">
                    <div class="col">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">DOB: 14 February 2000</li>
                            <li class="list-group-item">Linkedin: </li>
                            <li class="list-group-item">Email: nuraansa1@gmail.com</li>
                        </ul>
                    </div>
                    <div class="col">
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
        <div class="container p-2">
            <div class="card p-3">
                <div class="row g-0 p-3">
                    <h1>Education</h1>
                    <hr>
                    <div class="col-md-8" v-for="item in education" :key="item.id">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.year }}</h5>
                            <p class="card-text">{{ item.description }}</p>
                        </div>
                    </div>
                    <div class="col-md-4">
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
    background: #C4D7B2;
}
</style>