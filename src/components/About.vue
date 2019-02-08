<template>
 <div class="about">
    <div class="container">
      <h4 class="about-title">{{content.title }}</h4>
      <div class="block">
        <div class="content">
          <p class="text">{{content.text1}} </p>
          <p class="text">{{content.text2}}</p>
          <div class="social-block">
            <a v-for="link in links"
              class="icon" href="#">
              <img :src="getIconPath(link.icon)">
            </a> 
          </div>
        </div>
        <div class="listest">
          <div class="item" v-for="item in content.facts">
            <div class="number">{{ item.number }}</div>
            <div class="items-overview">
              <h3 class="item-title"> {{ item.title }}</h3>
              <p class="about-text">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import languageHelper from "../languages/langhelper.js"
export default {
  name: 'About',
    data () {
    return {
     links: [
        {
          icon: 'facebook.png',
         },
        {
          icon: 'linkedin.png',
         },
        {
          icon: 'google.png',
         },
        {
          icon: 'Dribble.png',
         },
        {
          icon: 'Bechance.png',
       }
      ],
      content: {}  
    }
  },
  created(){
     this.setContent(languageHelper.getAboutContent(this.language))
  },
  methods: {
    getIconPath (iconName) {
        return iconName ? require(`../assets/icons/${iconName}`) : ''
    },
    setContent(data){
      this.content = data
    }
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  width: 1250px;
  margin: 0 auto;
  }

.about {
  height: 460px;
  border-bottom: 1px solid #dde1e4;
}

.about-title {
  text-align: left;
  padding-left: 18px;
  border-left: 5px solid #e1e6ea;
  color: #292f36;
  font-size: 18px;
  margin-left: 55px;
  line-height: 42px;
  text-transform: uppercase;
}

.block {
  display: flex;
  /* flex-wrap: wrap; */
}

.content {
  width: 587px;
  height: 222px;
  color: #8d8f92;
  font-size: 16px;
  line-height: 26px;
  float: left;
  text-align: justify;
  margin-left: 55px;
}

.content .text {
  margin: 0;
  padding-bottom: 15px;
}

.icon {
  width: 60px;
  height: 60px;
  background-color: #c8cdd0;
  color: #ffffff;
  font-size: 30px;
  line-height: 86px;
  padding: 13px;
  margin: 1px;
}

.listest{
  float: right;
  width: 518px;
}

.item {
  height: 120px;
}

.number {
  width: 50px;
  height: 50px;
  background-color: #23b7a4;
  color: #fcf7f7;
  font-size: 20px;
  line-height: 42px;
  text-transform: uppercase;
  float: left;
}

.items-overview {
  padding-left: 20px;
  float: right;
}

.item-title {
  width: 448px;
  height:10px;
  color: #292f36;
  font-size: 18px;
  font-weight: 700;
  line-height: 12px;
  text-transform: uppercase;
  text-align: left;
}

.about-text {
  width: 379px;
  height: 43px;
  color: #8d8f92;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
}

/* @media screen and (max-width: 950px){
.container {
     width: 950px;
    }
}

@media screen and (max-width: 680px){
   .container {
    width: 680px;
  }
}

@media screen and (max-width: 450px){
  .container {
    width: 450px;
  }
 } */
 
</style>
