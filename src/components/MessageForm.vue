<template>
<div class="form">
  <div class="contact-form">
    <div class="messages">
      <div class="form-names">
        <label class="form-name" for="name">Your Name</label>
        <input type="text" class="form-input" id="name">
      </div>
      <div class="form-email">
        <label class="form-mail" for="mail">Your email</label>
        <input type="text" class="form-input" id="mail">
      </div>
    </div>
    <div class="form-messages">
      <label class="form-message" for="message">Your message</label>
      <textarea class="form-textarea" id="message"></textarea>
    </div>
  </div>
  <button class="form-button" type="submit">send message</button>
</div>

</template>

<script>
export default {
  name: 'MessageForm',
  data(){
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  width: 555px;
  height: 400px;
  float: right;
  margin-right: 90px;  
}

.contact-form {
  padding: 22px 0 0 30px;
}

.messages {
  display: flex;
  text-align: left;  
} 

.form-names {
  margin-left: 0;
}

.form-name {
  width: 72px;
  height: 10px;
  color: #8d8f92;
  font-size: 14px;
  line-height: 26px;
  text-transform: uppercase;
}

.form-input {
  width: 240px;
  height: 44px;
  background-color: #eaeef1;
  border-top: 0;
  border-left: 0;
}

.form-email {
  margin-left: 0;
}

.form-mail {
  width: 73px;
  height: 10px;
  color: #8d8f92;
  font-size: 14px;
  line-height: 26px;
  text-transform: uppercase;
}

.form-messages {
  text-align: left;
}

.form-message {
  width: 93px;
  height: 10px;
  color: #8d8f92;
  font-size: 14px;
  line-height: 26px;
  text-transform: uppercase;
  padding-top: 11px;
}

.form-textarea {
  width: 500px;
  height: 159px;
  background-color: #eaeef1;
  border: 0;
}

.form-button {
  width: 147px;
  height: 40px;
  border: 2px solid #23b7a4;
  background-color: #23b7a4;
  margin-top: 20px;
  float: left;
  margin-left: 31px;
}

.info {
  width: 91px;
  height: 10px;
  color: #ffffff;
  font-size: 14px;
  line-height: 28px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
}

@media screen and (max-width: 600px){
  .messages{
    flex-wrap: wrap;
  }
  .form-textarea {
    width: 410px;
  }
  .form-input {
    margin-bottom: 16px;
  } 
  .form-button {
    margin-top: 5px;
    margin-left: 29px;
  } 
} 

</style>
