<template>
  <div class="hello">
    <div class="header">
    <h1>{{ content.overview }}</h1>
     <!--<img alt="Vue logo" src="../assets/pic.png">-->
     <span>{{ content.text1 }}</span>
   <div class="btns-row">
      <button class="btn" > view more </button>
      <button class="video"><video src=""> video tour </video></button>
   </div>
    </div>
<div class="content">
  <form><button class="btn" ></button></form>
   <h2>{{content.text2}}</h2>
   <h4>{{content.text3}}</h4>
  </div>
   </div>
</template>

<script>
import languageHelper from "../languages/de.js"

export default {
  name: 'Home',
  created(){
    this.setText(languageHelper.getHomeText())
  },
  data(){
    return {
      content: {}
    }
  },
  methods:{
    setText(data){
      this.content = data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h1 { 
     padding-top: 20px;
     width: 1879px;
     padding-left:50px;
     height: 640px;
     background-image:url("../assets/pic.png");
     color:#FFF;
     font-family:Arial, Helvetica, sans-serif;
     font-size:30px;  
}
.header span {
    font-size:12px;
  }
.btn {
    width: 68px;
    height: 10px;
    color: #ffffff;
    font-family: "Quattrocento Sans";
    font-size: 14px;
    font-weight: 700;
    line-height: 28px;
    text-transform: uppercase;
}
.video {
     width: 72px;
     height: 10px;
     color: #ffffff;
     font-family: "Quattrocento Sans";
     font-size: 14px;
     font-weight: 700;
     line-height: 28px;
     text-transform: uppercase;
}

.content {
     width: 720px;
     height: 310px;
}
form {
     width: 10px;
     height: 35px;
     background-color: #e1e6ea;
}
h2 {
     width: 258px;
     height: 26px;
     color: #292f36;
     font-family: "Quattrocento Sans";
     font-size: 36px;
     font-weight: 700;
     line-height: 42px;
     text-transform: uppercase;
}
h4 {
     width: 649px;
     height: 222px;
     color: #8d8f92;
     font-family: "Open Sans";
     font-size: 16px;
     font-weight: 400;
     line-height: 26px;
     font-family: "Open Sans";
     font-family: "Open Sans - Bold";
     font-weight: 700;
}
</style>
 