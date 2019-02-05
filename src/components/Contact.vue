<template>
  <div class="contact">
    <div class="container">
      <h4 class="contact-title">{{ content.title }}</h4>
      <div class="maps">
        <div class="item" v-for="item in items">
          <img :src="item.img" />   
          <div class="maps-info">
            <div class="maps-overtitle">{{ content.overtitle }}</div>
            <p class="maps-text">{{content.info1}}</p>
            <p class="maps-text">{{content.info2}}</p>
          </div>
       </div> 
     </div>
   </div>
   <MessageForm/>
  </div>
</template>

<script>
import MessageForm from "./MessageForm.vue"
import languageHelper from "../languages/langhelper.js"
export default {
  name: 'Contact',
  components: { 
      MessageForm
    },
     created(){
     this.setContent(languageHelper.getContactContent(this.language))
  },
  data(){
    return {
      content: {} ,
       
        items: [
        {
          img:require('../assets/photos/maps.png'),
          
        }
      ]
    }
  },
   methods:{
    setContent(data){
      this.content = data
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  width: 1250px;
  margin: 0 auto;
}
 img {
   width: 1250px;
 }
.contact-title {
  text-align: left;
  padding-left: 18px;
  border-left: 5px solid #e1e6ea;
  color: #292f36;
  font-size: 18px;
  margin-left: 55px;
  font-weight: 700;
  line-height: 42px;
  text-transform: uppercase;
}

.maps-info {
  width: 563px;
  color: #8d8f92;
  font-size: 16px;
  line-height: 26px;
  text-align: justify;
  margin-left: 43px;
}

.maps-overtitle {
  width: 254px;
  height: 15px;
  color: #292f36;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 17px;
  padding-top: 50px;
}

.maps-text {
  width: 535px;
  height: 71px;
  color: #8d8f92;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
}


@media screen and (max-width: 915px){
 .container {
   width: 1035px;
 }
 img {
  width: 1030px;
 }
.contact-title {
  padding-left: 8px;
  border-left: 4px solid #e1e6ea;
  font-size: 15px;
  margin-left: 6px;
  line-height: 34px;
  }
.maps-overtitle {
  width: 210px;
  height: 7px;
  font-size: 12px;
  line-height: 2px;
  padding-bottom: 4px;
  padding-top: 42px;
}
.maps-text {
  width: 350px;
  height: 65px;
  font-size: 13px;
  line-height: 22px;
}
}

@media screen and (max-width: 780px){

}

@media screen and (max-width: 600px){

}

</style>
