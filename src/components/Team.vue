<template>
 <div class="team">
   <div class="container">
      <h4 class="team-title">{{ title }}</h4>
      <div class="persons">
        <div class="item" v-for="item in items">
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
export default {
    name: 'Team',
    data () {
    return {
      title: 'meet the team.',
      items: [
        {
          img:require('../assets/photos/ceo.png'), 
          name: 'Gloria Bromley',
          stelle: 'CEO and Founder'
        },
        {
          img:require('../assets/photos/development.png'),
          name: 'Paul Torres',
          stelle: 'Head of Development'
        },
        {
          img:require('../assets/photos/graphic.png'),
          name: 'Judith Gillette',
          stelle: 'Graphic Desinger'
        },
        {
          img:require('../assets/photos/director.png'),
          name: 'Delores Reed',
          stelle: 'Client Service Director'
        }
      ],

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
          ]
      }
    },
      methods: {
    getIconPath (iconName) {
        return iconName ? require(`../assets/icons/${iconName}`) : ''
    }
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 1050px;
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
  display: flex;  
}

.item {
  padding-right: 15px;
}

.item:hover {
  cursor: pointer;
}

.color {
  background-color: #e1e6ea;
  margin-top: -4px;
  padding-left: 21px;
}

/* .color:hover {
  background: #4e5a62;
} */


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

/* .block:hover {
  display: block;
  background: #0a2b5c;
  cursor: pointer;
} */

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


</style>
