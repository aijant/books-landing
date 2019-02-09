<template>
  <div class="services">
    <div class="container">
      <h4 class="services-title">{{ content.title }}</h4> 
          <div class="navigation">
            <div class="item" v-for="item in content.items"> 
              <a class="icon" href="#">
                <img :src="getIconPath(item.icon)">
              </a>
              <h3 class="item-text"> {{ item.text }}</h3>       
              <p class="information">{{ item.info }}</p>
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
     content: {}
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
  width: 1250px;
  margin: 0 auto;
}

.settings {
  display: flex;
  flex-wrap: wrap;
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
  flex-wrap: wrap;
}  

.item {
  margin-top: 26px;
  width: 306px;
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
@media screen and (max-width: 1060px){
  .container {
    width: 1200px;
  }
}
@media screen and (max-width: 940px){
  .container {
    width: 900px;
  }
}
@media screen and (max-width: 636px){
  .container {
    width: 600px;
  }
}
</style>
