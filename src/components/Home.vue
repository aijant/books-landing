<template>
  <div class="hello">
    <div class="content">
      <h1>{{ content.overview }}</h1>
      <p>{{ content.text1 }}</p>
      <div class="btns-row">
        <button class="btn-view" >
          <a href="#">view more</a>
        </button>
        <button class="btn-video">
          <a href="https://www.youtube.com/watch?v=x4Xh4ruKtfw">video tour</a>
        </button>
      </div> 
    </div>
    <carousel :images="images"/>
</div>
</template>

<script>
import languageHelper from "../languages/de.js"
import Carousel from "./Carousel.vue"

export default {
  name: 'Home',
    components: { 
      Carousel
    },
  created(){
    this.setText(languageHelper.getHomeText())
  },
  data(){
    return {
      content: {},
      images: [
         {
          img:require('../assets/carousel/pic.png'), 
          alt: "Hello flower"
        },
        {
          img: require('../assets/carousel/flowers.png'),
          alt: "Hello Bibliothek"
          },
        {
          img: require('../assets/carousel/max.png'),
          alt: "Hello history"
        }
      ]
   }
  },
  methods:{
    setText(data){
      this.content = data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  position: absolute;
  top: 302px;
  color: #ffff;
  margin-left: 310px;
}

h1 { 
  width: 507px;
  height: 26px;
  color:#f8f5f5;
  font-size: 26px;
  font-weight: bold;
  line-height: 42px;
  text-transform: uppercase;
  text-align: left;
}

p {
  width: 648px;
  height: 43px;
  color: #ccd0d7;
  font-size: 16px;
  font-weight: normal;
  line-height: 26px;
  text-align: left;
}

.btns-row {
  text-align: left;
}

.btn-view {
  width: 120px;
  height: 40px;
  border: 2px solid #ffffff;
  background: none;
  border-radius: 4px;
}

.btn-view a {
  width: 68px;
  height: 10px;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  line-height: 28px;
  text-transform: uppercase;
  text-decoration: none;
}

.btn-view:hover{
  border: 2px solid #23b7a4;
  background: #23b7a4;
}

.btn-video{
  width: 120px;
  height: 40px;
  border: 2px solid #ffffff;
  background: none;
  margin-left: 13px;
  border-radius: 4px;
}

.btn-video a {
  width: 72px;
  height: 10px;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  line-height: 28px;
  text-transform: uppercase;
  text-decoration: none;
}

.btn-video:hover{
  border: 2px solid #23b7a4;
  background: #23b7a4;
}
</style>
 