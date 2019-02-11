<template>
  <div class="contact">
    <div class="container">
      <h4 class="contact-title">{{ content.title }}</h4>
      <div class="maps">
        <div class="item" v-for="item in items" :key="item.id">
          <img :src="item.img" />  
          <div class="maps-block">
            <div class="maps-info">
              <h3 class="maps-overtitle">{{ content.overtitle }}</h3>
              <p class="maps-text">{{content.info1}}</p>
              <p class="maps-text">{{content.info2}}</p>
            </div>
            <MessageForm/>
          </div>           
        </div> 
      </div>
    </div>
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
      content: {},       
        items: [
        {
          img:require('../assets/photos/maps.png')      
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
    line-height: 42px;
    text-transform: uppercase;
  }

  .maps-block {
    display: flex;
    flex-wrap: wrap;
  }

  .maps-info {
    width: 560px;
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
    color: #8d8f92;
    font-size: 16px;
    line-height: 26px;
  }

  @media screen and (max-width: 1058px){
  .container {
    width: 1035px;
    }

  img {
    width: 1035px;
  }
  }
  @media screen and (max-width: 630px){
    .container {
      width: 610px;
    }

    .maps-text {
      width: 487px;
    }

    img {
      width: 617px;
    }
  }

  @media screen and (max-width: 547px){
    .container {
      width: 475px;
    }

    img {
      width: 470px;
    }
    
    .maps-text {
      width: 380px;
    }
  }

</style>
