<template>
  <div class="services">
    <div class="container">
      <h4 class="services-title">{{ content.title }}</h4>
      <div class="block-services">
           <a v-for="link in links" class="icon" href="#">
           <img :src="getIconPath(link.icon)">
           </a>
      </div> 
      <div class="navigation">
        <div class="item" v-for="item in content.items"> 
          <h3 class="item-text"> {{ item.text }}</h3>       
          <p class="information">{{ item.info }}</p>
         </div>
      </div>
     <div class="block-services">
           <a v-for="link in links" class="icon" href="#">
           <img :src="getIconPath(link.icon)">
           </a>
      </div> 
      <div class="navigation">
        <div class="item" v-for="item in content.items"> 
          <h3 class="item-text"> {{ item.text }}</h3>       
          <p class="info">{{ item.info }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import languageHelper from "../languages/langhelper.js"
export default {
  name: 'Services',
   created(){
     this.setContent(languageHelper.getServicesContent(this.language))
  },
  data(){
    return {
     content: {} ,
       links: [
        {
          icon: 'cogs.png',
         },
        {
          icon: 'pencil.png',
         },
          {
          icon: 'mobile.png',
         },
           {
          icon: 'clock.png',
         }
          ]
      }
    },
      methods: {
    getIconPath (iconName) {
        return iconName ? require(`../assets/icons/${iconName}`) : ''
    },
    setContent(data){
      this.content = data
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

.services-title {
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

.navigation {
  display: flex;
}  
 
.block-services {
  display: flex;
}

.icon {
  margin-left: 240px;
}

.item {
  margin-top: 26px;
}

.item-text {
  color: #292f36;
  font-size: 17px;
  text-transform: uppercase;
  margin-left: 20px;
}

.information {
  color: #8d8f92;
  font-size: 16px;
  line-height: 26px;
  margin-left: 43px;
  padding-bottom: 36px;
}
.info {
  color: #8d8f92;
  font-size: 16px;
  line-height: 26px;
  margin-left: 43px;
}
</style>
