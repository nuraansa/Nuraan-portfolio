<template>
    <div class="container p-4">
        <div class="col p-2" v-for="item in projects" :key="item.id">
            <div class="card p-2">
                <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text">Project Decription</p>
                    <p class="card-text"><small class="text-body-secondary">Github</small></p>
                    <p class="card-text"><small class="text-body-secondary">Netlify</small></p>
                </div>
                <img :src="item.image" class="card-img-bottom" :alt="item.name">
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

<style scoped></style>