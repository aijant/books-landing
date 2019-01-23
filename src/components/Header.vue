<template>
  <div class="header">
		<div class="header__logo"><img src="../assets/logo.png" alt="logo"></div>
		<nav class="header__nav">
  	 <router-link to="/">home</router-link>
     <router-link to="about">about</router-link>
     <router-link to="team">team</router-link>
     <router-link to="features">features</router-link>
     <router-link to="contact">contact</router-link>
     
    </nav>
	<slot></slot>
  </div>
  </template>

<script>
export default {
  name: 'Header',
  data(){
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  border-bottom: 100px solid rgb(117, 120, 148);
}
.header__logo{
  float: left;
  font-size: 50px;
}
.header__nav{
  float: right;
  white-space: nowrap;
  font-size: 15px;
  text-transform: uppercase;
}
/* container{
	width: 986px;
	margin: 0 auto;
}
.logo{
  background: red;
  width: 100%;
  display: flex;
  justify-content: left;
}
.logos{
  padding: 5px;
  max-width: 100%;
  box-sizing: border-box;
}
nav{
  margin: auto;
  width: 800px;
  height: 100px;
}
.books{
  background-color: black;
  font-size: 14px;
  margin-top: 40px;
}
.books a{
  color: #000;
  text-align: center;
  padding: 14px 16 px;
  font-size: 15px;
}
.books a:hover{
  border-bottom: 2px solid #000;
}

@media screen and (max-width: 768px) {
  .books{
    display: none;
  }
  nav{
    width: 100%;
    height: 100px;
  }
  .books.responsive{
    position: relative;
  }
  .books.responsive a{
    float: none;
    display: block;
    text-align: left;
  }
} */
</style>
