<template>
  <div class="Features">
    <div class="container">
      <h4 class="features-title">{{ title }}</h4>
      <div class="function">
        <div class="item" v-for="item in items">
           <img :src="item.img" />          
          <div class="design">
            <h3 class="brand"> {{ item.brand }}</h3>
            <p class="product">{{ item.product }}</p>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'Features',
  data(){
    return {
      title: 'FEATURES.',
      items: [
        {
          img:require('../assets/photos/tractor.png'), 
          brand: 'Product Design: Eames Chairs',
          product: 'Eames designs are certainly iconic. Everyone of us know at least two or three of their famous chairs. I would even risk saying that most of us dream about having a nice Eames.'
        },
         {
          img:require('../assets/photos/bicycle.png'), 
          brand: 'Elegant and Colorful Logos',
          product: 'I’ve always found logo design to be one of the most challenging things to get right. There’s so much that a logo can say about a brand without actually saying it.'
        },
          {
          img:require('../assets/photos/road.png'), 
          brand: 'A Showcase of Creative',
          product: 'It’s always interesting to see another designer’s take on a famous website, app or even physical product. Different designers add their own personality and style.'
        }
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
  height: 732px;
  background-color: #3a454d;
}

.features-title {
  text-align: left;
  padding-left: 18px;
  border-left: 5px solid #e1e6ea;
  color:#e1e6ea;
  font-size: 18px;
  margin-left: 55px;
  font-weight: 700;
  line-height: 42px;
  text-transform: uppercase;
}

.function {
  display: flex;
  padding: 47px;
  text-align: left;
}

.brand {
  color: #ffffff;
  font-size: 18px;
  line-height: 42px;
  text-transform: uppercase;
}

.product {
  color: #dcdfe1;
  font-size: 16px;
  line-height: 26px; 
}
</style>
