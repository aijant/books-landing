<template>
  <div class="home">
    <div class="content">
      <h1>{{ content.overview }}</h1>
      <p>{{ content.text1 }}</p>
      <div class="btns-row">
        <button class="btn-view" >
          <a href="#">view more</a>
        </button>
        <button class="btn-video">
          <a href="#">video tour</a>
        </button>
      </div> 
    </div>
    <carousel :images="images"/>
</div>
</template>

<script>
import languageHelper from "../languages/langhelper.js"
import Carousel from "./Carousel.vue"

export default {
  name: 'Home',
    components: { 
      Carousel
    },
  created(){
    let data = languageHelper.getHomeText(this.language)
    this.setText(data)
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
body {
  font-size: 14px;
  color: #fff;
  line-height: 1.3;
  background: #f9f9f9;
  max-width: 1250px;
}

.conteiner {
  min-width: 320px;
  max-width: 1250px;
  margin: 0 auto;
}

.content {
  position: absolute;
  top: 302px;
  color: #ffff;
  margin-left: 310px;
}

h1 { 
  color:#f8f5f5;
  font-size: 26px;
  font-weight: bold;
  line-height: 42px;
  text-transform: uppercase;
  text-align: left;
}

p {
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
  border: 2px solid #ffffff;
  background: none;
  border-radius: 4px;
}

.btn-view a {
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
  border: 2px solid #ffffff;
  background: none;
  margin-left: 13px;
  border-radius: 4px;
}

.btn-video a {
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

@media screen and (max-width: 950px){
  .content {
    margin-left: 150px;
    top: 150px;
  }
  h1 {
    font-size: 18px;
    line-height: 16px;
  }
  p {
    font-size: 16px;
    line-height: 14px;
  }
   .btn-view a {
    font-size: 8px;
    line-height: 14px; 
  }

 .btn-video a {
    font-size: 8px;
    line-height: 14px; 
  }
}

@media screen and (max-width: 650px){
  .content {
    margin-left: 100px;
    top: 168px;
  }
  h1 {
    font-size: 16px;
    line-height: 12px;
  }
  p {
    font-size: 10px;
    line-height: 20px;
  }
    .btn-view a {
    font-size: 8px;
    line-height: 16px; 
  }
  .btn-video a {
    font-size: 8px;
    line-height: 16px; 
  }
}

@media screen and (max-width: 450px){
  .content {
    margin-left: 40px;
    top: 104px;
  }
  h1 {
    font-size: 9px;
    line-height: 0px;
  }
  p {
    font-size: 7px;
    line-height: 20px;
      
  }
  .btn-view {
    border: 1px solid #ffffff;
  }
  .btn-view a {
    font-size: 6px;
    line-height: 10px; 
  }
  .btn-video {
    border: 1px solid #ffffff;
  }
  .btn-video a {
   font-size: 6px;
   line-height: 10px; 
  }
}

</style>
  