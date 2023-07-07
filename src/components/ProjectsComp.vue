<template>
    <div class="bg">
        <h1 class="display-1 p-5" data-aos="zoom-in">Projects</h1>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 row-cols-sm-1 g-4">
                <div class="col p-2" v-for="item in projects" :key="item.id" data-aos="zoom-in">
                    <div class="card-group mb-3 shadow-lg h-100 rounded">
                        <img :src="item.image" class="card-img-top rounded" :alt="item.id" loading="lazy">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">{{ item.description }}</p>
                            <div class="card-footer bg-transparent">
                            <button class="btn m-3 p-3 res shadow-lg"><a :href="item.netlify">Netlify</a></button>
                            <button class="btn m-3 p-3 res shadow-lg"><a :href="item.github">Github</a></button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/testimonials" id="res" class="btn btn-light m-3 p-3 res">Testimonials</router-link>
    
    </div>
</template>

<script>
export default {
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch('fetchProjects')
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
.res {
    text-decoration: none;
    color: #DFEEEA; 
    background:  #5E8B7E;
}
a{
    text-decoration: none;
    color: #DFEEEA; 
}
.res a:hover {
    background:  #DFEEEA;
    color:  #5E8B7E;
    text-decoration: none;
}
.res:hover {
    background:  #DFEEEA;
    color:  #5E8B7E;
    border: 2px solid #5E8B7E;
}
.card-img-top{
    height: 10rem;
}
</style>