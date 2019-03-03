<template>
  <div class="work">
   <div class="container">
    <div class="block">
      <h4 class="work-title">{{ content.title }}</h4>
      <div class="photo">
        <div class="item" v-for="item in content.items" :key="item.id">
          <img :src="item.img"/>
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
import languageHelper from "../languages/langhelper.js"
export default {
    name: 'Work',
     created(){
     this.setContent(languageHelper.getWorkContent(this.language))
  },
    data () {
    return {
      content: {} 
     }
  },
  methods:{
    setContent(data){
      this.content = data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .work {
    background-color: #3a454d;
  }

  .container {
    width: 1250px;
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

  .photo {
    padding-bottom: 60px;
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    padding: 15px; 
  }

  .item-info {
    display: none;
  }

  .item:hover .item-info {
    display: block;
    margin-top: -56px;
    background: #292f36;
    position: absolute;
    width: 346px;
    color: #fff;
    text-align: left;
    padding: 15px 0 0 22px;
    height: 38px;
    text-transform: uppercase;
  }

  .btns-row {
    text-align: center;
    margin-top: 29px;
    padding-bottom: 50px;
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

  img {
    width: 368px;
    height: 270px;
  }

  @media screen and (max-width: 1100px){
    .container {
      width: 1100px; 
  }
  }

  @media screen and (max-width: 961px){
    .container {
      width: 961px; 
    }
  }

  @media screen and (max-width: 790px){
    .container {
      width: 764px; 
    }
  }

  @media screen and (max-width: 620px){
    .container {
      width: 614px;
    }
  }

  @media screen and (max-width: 500px){
    .container {
      width: 500px;
    }
  }
</style>
