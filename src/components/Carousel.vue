<!-- <template>
 <div class='carousel'>
         <carousel class="carousel-slider" 

           v-for="(item) in items"
          :key="item">
        <div>
          <div class="slide__img" :style="{'background-image': `url(${item.img})`}"></div>
        </div>
        <div class="slide__text-block">
          <div class="slide__title">{{ item.alt }}</div>
        </div>
      
         </carousel>
   
    <div class='carousel-controls'>
      <button class='carousel-controls__button'>prev</button>
      <button class='carousel-controls__button'>next</button>
    </div>
  </div>
</template>   
-->


<template>
  <div class="custom-carousel">
    <carousel
      :perPage="1">
      <slide
        v-for="(item, index) in items"
        :key="index"
        class="slide">
        <div>
          <div class="slide__img" :style="{'background-image': `url(${item.img})`}"></div>
          <div class="slide__block">
            <div class="container">
              <div class="slide__text-block">
                <div class="slide__title">{{ item.alt }}</div>
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
          img: '../assets/carousel/flower.jpg',
          alt: "Hi Hello"
        },
        {
          // img: require('../assets/carousel/Bibliothek.jpg'),
          img: '../assets/carousel/flower.jpg',
          alt: "Hi Hello"
          },
        {
          // img: require('../assets/carousel/history.jpg'),
          img: '../assets/carousel/flower.jpg',
          alt: "Hi Hello"
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
.carousel{
  width: 1200px;
}

.btn {
  width: 156px;
  height: 56px;
  border: 0px solid #85b1cc;
  display: inline-block;
  margin-right: 7px;
  vertical-align: top;
  text-align: center;
  line-height: 11px;
  text-decoration: none;
  color: white;
  border-radius: 3px;
  box-shadow:2px 8px 6px 0px rgba(109, 50, 77, 0.65);
  text-shadow: 4px 4px 15px rgb(16, 85, 76);
  background: #7e2c9e; 
  background: -moz-linear-gradient(top, #3c4a63 29%, #2c539e 44%, #2c539e 84%, #2c539e 100%); 
  background: -webkit-linear-gradient(top, #2c539e 29%,#2c539e 44%,#2c539e 84%,#2c539e 100%); 
  background: linear-gradient(to bottom, #2c539e 29%,#2c539e 44%,#2c539e 84%,#2c539e 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2c539e', endColorstr='#2c539e',GradientType=0 );
}

.btn:hover{
  background: #45484d; 
  background: -moz-linear-gradient(top, #45484d 0%, #63579b 100%);
  background: -webkit-linear-gradient(top, #45484d 0%,#63579b 100%); 
  background: linear-gradient(to bottom, #45484d 0%, #63579b 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=0 );
}
getHomeText
.btn:active{
  box-shadow:2px 8px 6px 0px rgba(109, 50, 77, 0.65);
}

.video{
  width: 156px;
  height: 56px;
  border: 0px solid #85b1cc;
  display: inline-block;
  margin-right: 7px;
  vertical-align: top;
  text-align: center;
  line-height: 11px;
  text-decoration: none;
  color: white;
  border-radius: 3px;
  box-shadow:2px 8px 6px 0px rgba(109, 50, 77, 0.65);
  text-shadow: 4px 4px 15px rgb(16, 85, 76);
  background: #7e2c9e; 
  background: -moz-linear-gradient(top, #3c4a63 29%, #2c539e 44%, #2c539e 84%, #2c539e 100%); 
  background: -webkit-linear-gradient(top, #2c539e 29%,#2c539e 44%,#2c539e 84%,#2c539e 100%); 
  background: linear-gradient(to bottom, #2c539e 29%,#2c539e 44%,#2c539e 84%,#2c539e 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2c539e', endColorstr='#2c539e',GradientType=0 );
}

.video:hover{
  background: #45484d; 
  background: -moz-linear-gradient(top, #45484d 0%, #63579b 100%);
  background: -webkit-linear-gradient(top, #45484d 0%,#63579b 100%); 
  background: linear-gradient(to bottom, #45484d 0%, #63579b 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=0 );
}

.video:active{
  box-shadow:2px 8px 6px 0px rgba(109, 50, 77, 0.65);
}
</style>
