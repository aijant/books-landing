<template>
  <div class="contact">
    <div class="container">
      <h4 class="contact-title">{{ content.title }}</h4>
      <div class="maps">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.945393517229!2d74.62516495060586!3d42.810639979056965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c2a6fd1615%3A0x20d8bf1fd38af6a2!2z0JDQvNC10YDQuNC60LDQvdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LIg0KbQtdC90YLRgNCw0LvRjNC90L7QuSDQkNC30LjQuA!5e0!3m2!1sru!2skg!4v1551617227292"  allowfullscreen>
       </iframe>  
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

  .contact-title {
    text-align: left;
    padding-left: 18px;
    border-left: 5px solid #e1e6ea;
    color: #292f36;
    font-size: 18px;
    line-height: 42px;
    text-transform: uppercase;
  }

  iframe {
    width: 1250px;
    height: 450px;
    border: 0;
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
