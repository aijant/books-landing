<template>
  <div class="work">
   <div class="container">
    <div class="block">
      <h4 class="work-title">{{ title }}</h4>
      <div class="photo1">
        <div class="item" v-for="item in items">
           <img :src="item.img" />
           <p class="item-info"> {{ item.info }}</p>
        </div>
      </div> 
      <div class="photo2">
        <div class="item" v-for="item in indexs">
          <img :src="item.img" />
          <p class="item-info"> {{ item.info }}</p>
        </div>
      </div>
      <div class="btns-row">
       <button class="btn-show">
         <a href="#">show me more</a>
        </button>
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
          info:'Easy theme Setup',
         },
        {
          img:require('../assets/photos/dance.png'),
          info:'Easy theme Setup',
        },
          {
          img:require('../assets/photos/street.png'),
          info:'Easy theme Setup'
         }
      ],
      indexs:[
        {
          img:require('../assets/photos/sea.png'),
          info:'Easy theme Setup',
          },
          {
          img:require('../assets/photos/mountain.png'),
          info:'Easy theme Setup',
        },
          {
          img:require('../assets/photos/bird.png'),
          info:'Easy theme Setup'
        },
               
      ],
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

.work-title {
  text-align: left;
  padding-left: 18px;
  border-left: 5px solid #e1e6ea;
  color: #f6fafd;
  font-size: 18px;
  margin-left: 55px;
  font-weight: 700;
  line-height: 42px;
  text-transform: uppercase;
}

.block {
  width: 1410px;
  height: 899px;
  background-color: #3a454d;
}

.photo1 {
  width: 360px;
  height: 265px;
  display: flex;
  padding-bottom: 60px;
  margin-left: 30px;
}

.photo2 {
  width: 360px;
  height: 265px;
  display: flex;
  margin-left: 30px;
}

.item {
  padding: 30px; 
}

.item-info {
  display: none;
}

.item:hover .item-info {
  display: block;
  margin-top: -56px;
  background: #292f36;
  position: absolute;
  width: 23.7%;
  color: #fff;
  text-align: left;
  padding: 15px 0 0 22px;
  height: 38px;
  text-transform: uppercase;
}

.btns-row {
  text-align: center;
  margin-top: 115px;
}

.btn-show {  
  background: none;
  border-radius: 4px; 
  width: 147px;
  height: 40px;
  border: 2px solid #ffffff;
}

.btn-show a {
  width: 97px;
  height: 10px;
  color: #ffffff;
  font-size: 14px;
  line-height: 28px;
  text-transform: uppercase;
  text-decoration: none;
}

.btn-show:hover {
  border: 2px solid  #deb4b4;
  background: #deb4b4;
}
</style>
