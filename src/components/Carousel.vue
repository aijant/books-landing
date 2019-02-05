<template>
  <div class="carousel">
    <div class='carousel-view'>
       <img :src="images[currentNumber].img"/>
    </div>
    <p>
       <a @click="prev" href='#'>Previous</a> || <a @click="next" href='#'>Next</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    images: Array
  },
  data () {
    return {
      currentNumber: 0
    }
  },
  methods:{
      next () {
          let n = this.currentNumber + 1
          this.currentNumber = n % this.images.length    
        },
      prev () {
          if(this.currentNumber < 1) return 0
          this.currentNumber -= 1
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>   
img {
  width: 1255px;
  margin: 0 auto;
}

@media screen and (max-width: 950px) {
  img {
    width: 928px;
  }
}

@media screen and (max-width: 650px) {
  img {
    width: 621px;
  }
}

@media screen and (max-width: 450px) {
  img {
    width: 426px;
  }
}
</style>
