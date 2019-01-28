<template>
  <div class="work">
   <div class="container">
      <div class="block">
     <h4 class="work-title">{{ title }}</h4>
     <div class="block">
       <div class="photo">
          <div class="item" v-for="item in items">
            <img :src="item.img" />
              <div class="overlay"></div>
              <h3 class="item-text"> {{ item.photo }} </h3>
            </div>
       </div> 
     </div>
   </div> 
  </div>
  </div>
</template>

<script>

export default {
    name: 'Work',
    data () {
    return {
      title: 'lovely work.',
      items: [
        {
          img:require('../assets/photos/bird.png'), 
          photo: 'partnership guidlines',
         },
        {
          img:require('../assets/photos/dance.png'),
          photo: 'Paul Torres',
         },
        {
          img:require('../assets/photos/street.png'),
          photo: 'Judith Gillette',
        },
        {
          img:require('../assets/photos/sea.png'),
          photo: 'Delores Reed',
         },
          {
          img:require('../assets/photos/mountain.png'),
          photo: 'Delores Reed',
         },
          {
          img:require('../assets/photos/bird.png'),
          photo: 'Delores Reed',
         },
               
      ],
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
.work-title{
  text-align: left;
  padding-left: 18px;
  color: #ffffff;
  border-left: 5px solid #e1e6ea;
  font-size: 32px;
  margin-left: 55px;
  line-height: 42px;
  text-transform: uppercase;
    }

.block{
  width: 1050px;
  height: 724px;
  background-color: #3a454d;
}
.photo{
  display:flex;
}

.item-text{
width: 187px;
height: 14px;
color: #ffffff;
font-size: 18px;
line-height: 42px;
text-transform: uppercase; 
}
.overlay{
  
}
</style>
