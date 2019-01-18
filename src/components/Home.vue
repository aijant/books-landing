<template>
  <div class="hello">
    <div class="header">
    <h1>{{ content.overview }}</h1>
     <img alt="Vue logo" src="../assets/pic.png">
     <span>{{ content.text1 }}</span>
   <div class="btns-row">
      <button class="btn" > view more </button>
      <button class="video"><a href="https://www.youtube.com/watch?v=x4Xh4ruKtfw">video</a></button>
   </div>
    </div>
<div class="content">
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
  width: -1px;
  height: 5px;
  /* background-image:url("../assets/pic.png");*/
  color:rgb(26, 24, 24);
  font-family:Arial, Helvetica, sans-serif;
  font-size:30px;

}
.header span {
  font-family: inherit;
  font-weight: normal;
  font-size: 16px;
  line-height: 54px;
  color: rgb(12, 11, 11);
}

.btn {
  width: 156px;
  height: 56px;
  border: 0px solid #85b1cc;
  display: inline-block;
  margin-right: 7px;
  vertical-align: top;
  text-align: center;
  line-height: 11px;
  text-decoration: none;
  color: white;
  border-radius: 3px;
  box-shadow:2px 8px 6px 0px rgba(109, 50, 77, 0.65);
  text-shadow: 4px 4px 15px rgb(16, 85, 76);
  background: #7e2c9e; 
  background: -moz-linear-gradient(top, #3c4a63 29%, #2c539e 44%, #2c539e 84%, #2c539e 100%); 
  background: -webkit-linear-gradient(top, #2c539e 29%,#2c539e 44%,#2c539e 84%,#2c539e 100%); 
  background: linear-gradient(to bottom, #2c539e 29%,#2c539e 44%,#2c539e 84%,#2c539e 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2c539e', endColorstr='#2c539e',GradientType=0 );
}

.btn:hover{
  background: #45484d; 
  background: -moz-linear-gradient(top, #45484d 0%, #63579b 100%);
  background: -webkit-linear-gradient(top, #45484d 0%,#63579b 100%); 
  background: linear-gradient(to bottom, #45484d 0%, #63579b 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=0 );
}

.btn:active{
  box-shadow:2px 8px 6px 0px rgba(109, 50, 77, 0.65);
}

.video{
  width: 156px;
  height: 56px;
  border: 0px solid #85b1cc;
  display: inline-block;
  margin-right: 7px;
  vertical-align: top;
  text-align: center;
  line-height: 11px;
  text-decoration: none;
  color: white;
  border-radius: 3px;
  box-shadow:2px 8px 6px 0px rgba(109, 50, 77, 0.65);
  text-shadow: 4px 4px 15px rgb(16, 85, 76);
  background: #7e2c9e; 
  background: -moz-linear-gradient(top, #3c4a63 29%, #2c539e 44%, #2c539e 84%, #2c539e 100%); 
  background: -webkit-linear-gradient(top, #2c539e 29%,#2c539e 44%,#2c539e 84%,#2c539e 100%); 
  background: linear-gradient(to bottom, #2c539e 29%,#2c539e 44%,#2c539e 84%,#2c539e 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2c539e', endColorstr='#2c539e',GradientType=0 );
}

.video:hover{
  background: #45484d; 
  background: -moz-linear-gradient(top, #45484d 0%, #63579b 100%);
  background: -webkit-linear-gradient(top, #45484d 0%,#63579b 100%); 
  background: linear-gradient(to bottom, #45484d 0%, #63579b 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=0 );
}

.video:active{
  box-shadow:2px 8px 6px 0px rgba(109, 50, 77, 0.65);
}
</style>
 