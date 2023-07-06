<template>
    <div class=" bg">

        <div class="container-fluid">
            <h1 class="display-1">Testimonials</h1>
            <div class="row">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item" :class="{ active: testimonials.indexOf(item) === 0 }"
                            v-for="item in testimonials" :key="item.id">
                            <div class="card mx-auto mb-3 mt-5 it" style="max-width: 40%">
                                <div class="row g-1">
                                    <div class="col-md-4">
                                        <img :src="item.image" class="img-fluid" id="fluid" :alt="item.id" loading="lazy" />
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
            <router-link to="/contact" id="res" class="btn m-5 p-3">Conntact Me</router-link>
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
    background: #A7C4BC;
    height: 100%;
}

h1 {
    text-shadow: 2px 2px #DFEEEA;
}

.it {
    background: #DFEEEA;
}

#res {
    text-decoration: none;
    color: #DFEEEA;
    background: #5E8B7E;
}

@media (width < 1479px){
    .it{
        max-width:50% !important;
    }
}

@media (width < 1174px){
    .it{
        max-width:69% !important;
    }
}

@media (width < 846px){
    .it{
        max-width:80% !important;
    }
}

@media (width < 768px){
    #fluid{
        height:20rem;
    }
}

#res:hover {
    background: #DFEEEA;
    color: #5E8B7E;
    border: 2px solid #5E8B7E;
    text-decoration: none;
}</style>