<template>
    <div class="container">
        <div class="container about">
            <h1 class="text-center p-5">About Me</h1>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h3>I'm Nuraan Samodien</h3>
                        <img id="me" src="https://i.postimg.cc/h4M6rckp/flork.png" alt="me">
                    </div>
                    <div class="col">
                        <h2>About Me</h2>
                        Hello World! My name is Nuraan Samodien Davids.
                        I enjoy acquiring new knowledge and mastering new skills. <br> My interest in computers was sparked
                        years ago
                        when I
                        was a little girl, I used to enjoy experimenting,learning and figuring out new things on our family
                        computer.
                        <br>
                        Fast-forward to today, I am currently studying coding at Life Choices Academy with the goal of one
                        day becoming
                        a full stack web developer and creating awesome things.
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <h1>Hobbies & Interests</h1>
                <div class="container">
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
            </div>
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
    background-color: #c69d8f;
    color: black;
    transform: rotateY(180deg);
}
</style>