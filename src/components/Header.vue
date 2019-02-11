<template>
  <header>
    <div class="conteiner">
      <a href="#" class="logo">SateName</a>
      <nav class="main-nav">
        <button class="nav-btn"><i></i></button>
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">team</a></li>
          <li><a href="#">features</a></li>
          <li><a href="#">contact</a></li>
        </ul>  	  
      </nav>
    </div>		
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    font-size: 14px;
    color: #fff;
    line-height: 1.3;
    background: #f9f9f9;
    min-width: 320px;
  }

  .conteiner {
    min-width: 320px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .logo {
    width: 65px;
    height: 65px;
    background: #fed136 url(../assets/logo.png) 50% 50% no-repeat;
    background-size: 45px;
    text-indent: -9999px;
    text-decoration: none;
    float: left;
    position: absolute;
    display: -webkit-box;
  }

  .nav-btn {
    width: 65px;
    height: 65px;
    background: #198ca5;
    position: relative;
    border: none;
    float: right;
    border-radius: 5px;
    border: 2px solid #fed136;
  }

  .nav-btn i {
    width: 17px;
    height: 2px;
    background: #FFF;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -1px 0 0 -9px;
  }

  .nav-btn i::before,
  .nav-btn i::after {
    content: "";
    width: 17px;
    height: 2px;
    background: #FFF;
    position: absolute;
    left: 0;
  }

  .nav-btn i::before {
    top: -6px;
  }

  .nav-btn i::after {
    top: 6px;  
  }

  .main-nav{
    position: relative;
  }

  .main-nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    background: #198ca5;
    padding: 5px 10px;
    position: absolute;
    right: 0;
    top: 64px;
    width: 20%;
    display: none;
  }

  .main-nav:hover ul {
    display: block;
  }

  .main-nav li {
    margin: 0;
    padding: 0;
  }

  .main-nav a {
    padding: 7px 0;
    text-decoration: none;
    color: #000000;
    display: block;
    border-bottom: 1px solid rgba(255,255,255,0.8);
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 18px;
  }

  .main-nav a:hover {
    border-bottom: 2px solid #fed136;
    font-weight: 600;
  }

  @media screen and (min-width: 765px) {
    .main-nav ul {
      position: static;
      width: 100%;
      background: transparent;
      display: block;
      padding: 15px 0 0 60px;
    }

    .logo {
      width: 175px;
      height: 52px;
      background-size: 174px;
      position: absolute;
    }

    .nav-btn {
      display: none;
    }

    .main-nav li {
      display: inline-block;
      margin-right: 44px;
    }

    .main-nav li:last-child {
      margin-right: 0;
    }
    
    .main-nav a {
      color: #000000;
      display: inline-block;
      border-bottom: none;
    }
  }
  @media screen and (min-width: 1350px){
    header {
      height: 66px;
    }
  }

</style>
