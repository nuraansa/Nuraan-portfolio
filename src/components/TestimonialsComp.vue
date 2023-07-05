<template>
    <div class="p-4 bg">

        <div class="container-fluid">
            <h1 class="display-1">Testimonials</h1>
            <div class="row">
                <div class="col">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item" :class="{ active: testimonials.indexOf(item) === 0 }"
                                v-for="item in testimonials" :key="item.id">
                                <div class="card mx-auto mb-3 mt-5 it" style="max-width: 550px">
                                    <div class="row g-1">
                                        <div class="col-md-4">
                                            <img :src="item.image" class="img-fluid" :alt="item.id" loading="lazy" />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{{ item.name }}</h5>
                                                <h6>{{ item.title }}</h6>
                                                <p class="card-text">
                                                    {{ item.content }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon rounded" style="background-color: #5E8B7E"
                                aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon rounded" style="background-color: #5E8B7E"
                                aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },
    mounted() {
        this.$store.dispatch('fetchTestimonials')
    }
}
</script>

<style scoped>
.bg {
    background: #C4D7B2;
    height: 90vh;
}
.it{
    background: #A0C49D;
}
</style>