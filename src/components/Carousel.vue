<template>
  <div class="carousel">
    <div class='carousel-view'>
       <img :src="images[currentNumber].img" />
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

</style>
