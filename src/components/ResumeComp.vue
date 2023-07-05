<template>
    <div class="bg">
        <h1 class="p-3">Resume</h1>
        <div class="container">
            <div class="card p-4">
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
        <div class="container">
            <div class="card">
                <div class="row g-0">
                    <h1>Education</h1>
                    <div class="col-md-8" v-for="item in education" :key="item.id">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.year }}</h5>
                            <p class="card-text">{{ item.description }}</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img src="https://i.postimg.cc/bJwBtJb3/reading.jpg" class="img-fluid" alt="...">
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
        }
    },
    mounted() {
        this.$store.dispatch('fetchEducation')
    }
}
</script>

<style scoped>
.bg {
    background: #A7C4BC;
}
</style>