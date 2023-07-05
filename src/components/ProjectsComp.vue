<template>
    <div class="bg">
        <h1 class="display-1">Projects</h1>
        <div class="container p-4">
            <div class="row row-cols-1 row-cols-md-3 row-cols-sm-1 g-4">
                <div class="col p-2" v-for="item in projects" :key="item.id">
                    <div class="card mb-3 shadow-lg" style="width: 20rem;">
                        <img :src="item.image" class="card-img-top" :alt="item.id">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">{{ item.description }}</p>
                            <button class="btn m-3 p-3 res shadow"><a :href="item.netlify">Netlify</a></button>
                            <button class="btn m-3 p-3 res shadow"><a :href="item.github">Github</a></button>
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
    background: #C4D7B2;
}

.res{
    background: #C4D7B2;
}
a{
    text-decoration: none;
    color: #070707;
}

.res:hover {
    background: #A7C4BC;
    color: #5E8B7E;
    border: 2px solid #5E8B7E;
    text-decoration: none;
}
</style>