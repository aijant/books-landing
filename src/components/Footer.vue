<template>
  <div class="footer">
     <div class="container">
      <div class="footer-block">
        <div class="footer-text">© Copyright 2014 by PSD Booster. All Rights Reserved.</div>
        <div class="footer-social">
          <a v-for="link in links"
              class="icon" href="#">
              <img :src="getIconPath(link.icon)">
          </a> 
        </div>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'Footer',
  data(){
    return {
       links: [
        {
          icon: 'linkedin.png',
         },
        {
          icon: 'facebook.png',
         },
        {
          icon: 'skype.png',
         },
        {
          icon: 'Bechance.png',
         },
        {
          icon: 'in.png'
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

.footer {
  background-color: #3a454d;
}

.container {
  width: 1250px;
  height: 95px;
  }

.footer-block {
  display: flex;
  flex-wrap: wrap;
}

.footer-text {
  width: 352px;
  height: 15px;
  color: #ffffff;
  font-size: 14px;
  line-height: 90px;
  margin-left: 73px;
}

.footer-social {
   width: 801px;
  padding-top: 16px;
}

.icon {
  line-height: 71px;
  padding: 9px;
}

@media screen and (max-width: 930px){
 .footer-social {
  width: 470px;
 } 
}

@media screen and (max-width: 760px){
.footer-social {
  width: 290px;
 }
}

 @media screen and (max-width: 675px){
.container {
   width: 600px;
}
.footer-text {
  margin-left: 27px;
  line-height: 40px;
} 
}
</style>
