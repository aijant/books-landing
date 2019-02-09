<template>
 <div class="team">
   <div class="container">
      <h4 class="team-title">{{ content.title }}</h4>
      <div class="persons">
        <div class="item" v-for="item in content.posts">
          <div class="block">
            <a v-for="link in links" class="icon" href="#">
              <img :src="getIconPath(link.icon)">
            </a> 
          </div>
          <img :src="item.img" />          
          <div class="color">
            <h3 class="item-name"> {{ item.name }}</h3>
            <p class="stelle">{{ item.stelle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import languageHelper from "../languages/langhelper.js"
export default {
    name: 'Team',
    created(){
      this.setContent(languageHelper.getTeamContent(this.language))
  },
    data () {
    return {
      links: [
            {
              icon: 'linkedin.png',
            },
            {
              icon: 'facebook.png',
            },
              {
              icon: 'in.png',
            } 
              ],
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

.team-title {
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

.persons {
  padding: 0 20px;
  margin-left: 81px;
  display: flex;
  flex-wrap: wrap;
}

.item { 
  padding: 8px;
}

.item:hover {
  cursor: pointer;
}

.color {
  background-color: #e1e6ea;
  margin-top: -4px;
  padding-left: 21px;
}

.block {
  display: none;
}

.icon {
  padding: 15px;
  margin-right: 20px;
  background: #0a2b5c;
}
.item:hover .block {
  display: block;
  width: 274px;
  position: absolute;
  margin: 108px 0 0 4px;
}

.item:hover .color {
  background: #4e5a62;
}

.item-name {
  text-align: left;
  margin: 0;
  padding-bottom: 18px;
  height: 12px;
  color: #292f36;
  font-size: 16px;
  font-weight: 700;
  line-height: 35px;
  text-transform: uppercase;
}

.stelle {
  margin: 0;
  padding-bottom: 14px;
  height: 12px;
  color: #8d8f92;
  font-size: 14px;
  line-height: 20px;
  text-align: left; 
}

@media screen and (max-width: 1100px){
  .container {
    width: 1100px;
  }
}

@media screen and (max-width: 950px){
  .container {
    width: 947px;
  }
}

@media screen and (max-width: 680px){
  .container {
      width: 650px;
  }
}

@media screen and (max-width: 450px){
  .container {
    width: 450px;
  }
}

</style>
