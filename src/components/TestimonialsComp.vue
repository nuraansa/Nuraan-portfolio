<template>
    <div class="container p-4">
        <div class="col p-2" v-for="item in testimonials" :key="item.id">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="item.image" class="card-img-bottom" :alt="item.name">
                    </div>
                    <div class="carousel-item">
                        <img :src="item.image" class="card-img-bottom" :alt="item.name">
                    </div>
                    <div class="carousel-item">
                        <img :src="item.image" class="card-img-bottom" :alt="item.name">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
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

<style scoped></style>