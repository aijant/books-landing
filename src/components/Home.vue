<template>
  <div class="hello">
    <div class="header">
    <h1>{{ msg }}</h1>
     <img alt="Vue logo" src="../assets/pic.png">
     <p>Die Buchhandlung Walther König ist eine Verlagsbuchhandlung für Kunst und Kunstwissenschaft, Architektur, Kunstgewerbe, Design, Mode.</p>
   <div class="btns-row">
      <button class="btn" > view more </button>
      <button class="video"><video src=""> video tour </video></button>
   </div>
    </div>
<div class="content">
  <form><button class="btn" ></button></form>
   <h2>ЧУДЕСА АРХИТЕКТУРЫ</h2>
   <h4>А как часто вы читаете книги? И какая обстановка вдохновляет вас на прочтение книг? Наверное, каждый ответит по-своему. Ведь кому-то удобно и приятно читать, завернувшись в теплое одеяло, кто-то предпочитает читать у окна, для кого-то приятной атмосферой для уединения с книгой является природа. Однако если бы вы побывали в городской библиотеке Штутгарта, то она бы вас настолько пропитала своей атмосферой, что вы бы с этого момента читали книги только там!</h4>
  </div>
   </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      msg: "Библиотека Штутгарта — самая изящная городская библиотека в мире"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h1 {
     width: 507px;
     height: 26px;
     color: #ffffff;
     font-family: "Quattrocento Sans";
     font-size: 36px;
     font-weight: 700;
     line-height: 42px;
     text-transform: uppercase;
    
}
p {
    width: 648px;
    height: 43px;
    color: #ccd0d7;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
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
 