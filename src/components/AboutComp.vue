<template>
    <div class="bg">
        <div class="container about">
            <h1 class="text-center p-5">Welcome to my portfolio!</h1>
            <div class="container text-center p-2">
                <div class="row">
                    <div class="col">
                        <!-- <h2>I'm Nuraan Samodien</h2> -->
                        <img id="me" src="https://i.postimg.cc/h4M6rckp/flork.png" alt="me" style="width: 18rem">
                    </div>
                    <div class="col">
                        <h1>About Me</h1>
                        <p class="about-info"> Hello World! My name is Nuraan Samodien Davids.
                            I enjoy acquiring new knowledge and mastering new skills. <br> My interest in computers was
                            sparked
                            years ago
                            when I
                            was a little girl, I used to enjoy experimenting,learning and figuring out new things on our
                            family
                            computer.
                            <br>
                            Fast-forward to today, I am currently studying coding at Life Choices Academy with the goal of
                            one
                            day becoming
                            a full stack web developer and creating awesome things.
                        </p>
                    </div>
                </div>
            </div>

            <h1 class="p-5">Hobbies & Interests</h1>
            <div class="container pb-3">
                <div class="row img-div g-3">
                    <div class="col" v-for="item in hobbies" :key="item.id">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img :src="item.image" :alt="item.title" style="height: 300px; width: 300px" />
                                </div>
                                <div class="flip-card-back">
                                    <h2>{{ item.title }}</h2>
                                    <p>
                                        {{ item.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <router-link to="/resume" id="res" class="btn btn-light m-3 p-3">View Resume</router-link>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        hobbies() {
            return this.$store.state.hobbies
        }
    },
    mounted() {
        this.$store.dispatch('fetchHobbies')
    }
}
</script>

<style scoped>
.bg {
    background: #6dbf80;
}

.about-info {
    font-size: 1.5rem;
}

/* flip-card */
.img-div {
    width: 100%;
    position: relative;
    align-content: center;
}

.flip-card {
    width: 300px;
    height: 300px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    color: black;
}

.flip-card-back {
    background-color: #DFEEEA;
    color: black;
    transform: rotateY(180deg);
}

#res {
    text-decoration: none;
    color: #DFEEEA; 
    background:  #45935f;
}

#res:hover {
    background:  #7bce97;
    color:  #45935f;
    border: 2px solid #5E8B7E;
    text-decoration: none;
}

</style>