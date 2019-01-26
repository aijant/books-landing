
<template>
  <div class="carousel">
    <carousel
      :perPage="1">
      <slide
        v-for="(item, index) in items"
        :key="index"
        class="slide">
        <div>
          <div class="img" v-bind:style="{'backgroundImage': `url(${item.img})`}"></div>
          <div class="block">
            <div class="container">
              <div class="text-block">
                <div class="title">{{ item.alt }}</div>
                <div class="btns-row">
                  <button class="btn" > view more </button>
                  <button class="video">
                    <a href="https://www.youtube.com/watch?v=x4Xh4ruKtfw">video</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  data () {
    return {
      items: [
         {
          // img:require('../assets/carousel/flower.jpg'),
          img: "../assets/carousel/flower.jpg",
          alt: "Hi Hello flower"
        },
        {
          // img: require('../assets/carousel/Bibliothek.jpg'),
          img: "../assets/carousel/Bibliothek.jpg",
          alt: "Hi Hello Bibliothek"
          },
        {
          // img: require('../assets/carousel/history.jpg'),
          img: "../assets/carousel/history.jpg",
          alt: "Hi Hello history"
        }
      ]
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>   

</style>
