<template>
  <div class="contact">
    <div class="container">
      <h4 class="contact-title">{{ title }}</h4>
      <div class="maps">
        <div class="item" v-for="item in items">
          <img :src="item.img" />   
      <div class="maps-info">
        <div class="maps-overtitle">{{ overtitle }}</div>
          <p class="maps-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique nec dolor non, ornare sagittis dolor. Nulla vestibulum lacus sed molestie gravida.</p>
          <p class="maps-text">Cras fermentum elit quis magna congue, <b>vel sodales</b> arcu vestibulum. Nunc lobortis dui magna, quis dapibus lacus</p>
     </div>
       </div> 
     </div>
   </div>
   <MessageForm/>
  </div>
</template>

<script>
import MessageForm from "./MessageForm.vue"

export default {
  name: 'Contact',
  components: { 
      MessageForm
    },
  data(){
    return {
        title:'stay in touch.',
        overtitle:'contact information',
        items: [
        {
          img:require('../assets/photos/maps.png'),
          
        }
      ]
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  width: 1350px;
  margin: 0 auto;
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
  font-size: 20px;
  line-height: 26px;
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


</style>
