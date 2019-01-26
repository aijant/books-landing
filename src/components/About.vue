<template>
 <div class="about">
    <div class="container">
      <h4 class="about-title">{{ title }}</h4>
       <div class="block">
        <div class="content">
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. Crferm entum  quismagna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis lacusullamcorper at. </p>
            <p class="text">Phasellus sollicitudin ante eros ornare, <b>sit amet luctus lorem semper.</b> Suspendisse posuere, quamdictum consectetur, augue metus pharetra tellus, eu feugiatloreg egetnisi. Cras ornare bibendum ante, ut bibendum odio convallis eget. vel sodales arcu vestibulum</p>
          <div class="social-block">
            <a
              v-for="link in links"
              class="icon" href="#">
              <img :src="getIconPath(link.icon)" :alt="link.alt">
            </a>
           </div>
           <img src="../assets/icons/F.png" alt="link.alt">
        </div>
        <div class="listest">
          <ul class="list">
            <li class="item" v-for="item in items">
              <div class="number">{{ item.number }}</div>
              <div class="topic">
                <div class="item-title"><a href="https://www.youtube.com/watch?v=iPV5GKeHyV4">{{ item.title }}<a></div>
                <div class="about-text">{{ item.content }}</div>
              </div>
            </li>
          </ul>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
    data () {
    return {
      title: 'we are modest.',
      links: [
        {
          icon: 'F.png',
          alt: 'facebook'
        },
        {
          icon: 'L.png',
          alt: 'twitter'
        },
        {
          icon: 'g.png',
          alt: 'gp'
        },
        {
          icon: 'D.png',
          alt: 'dribble'
        },
        {
          icon: 'e.png',
          alt: 'be'
        }
      ],
      items: [
        {
          number: '01',
          title: 'Dedication to the customers',
          content: 'Integer vel lacus non dui ullamcorper venenatis. Aliquam vitae tristique nisi, vitae ullamcorper risus.'
        },
        {
          number: '02',
          title: 'working closely with our clients',
          content: 'Sed blandit nisi urna, sed pellentesque enim consectetur vitae. Suspendisse ut vehicula nibh.'
        },
        {
          number: '03',
          title: 'increase happiness',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend laoreet euismod.'
        }
      ]  
    }
  },
  methods: {
    getIconPath (iconName) {
        return iconName ? require(`../assets/icons/${iconName}`) : ''
    }
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.about-title {
   width: 290px;
   height: 26px;
   color: #292f36;
   font-family: "Quattrocento Sans";
   font-size: 26px;
   font-weight: 700;
   line-height: 42px;
   margin-left: 176px;
   text-transform: uppercase;
}

.content {
   width: 649px;
   height: 222px;
   color: #8d8f92;
   font-family: "Open Sans";
   font-size: 16px;
   font-weight: 400;
   line-height: 26px;
   font-family: "Open Sans";
   font-family: "Open Sans";
   font-weight: 700;
   float: left;
}

.icon {
   width: 60px;
   height: 60px;
   background-color: #c8cdd0;
   color: #ffffff;
   font-family: Socialico;
   font-size: 36px;
   font-weight: 400;
   line-height: 42px;
   text-transform: uppercase;
   letter-spacing: -0.9px;
}
.listest{
  float: right;
}
.topic{
  text-align: left;
}
.item-title{
  width: 247px;
  height: 14px;
  color: #292f36;
  font-family: "Quattrocento Sans";
  font-size: 18px;
  font-weight: 700;
  line-height: 42px;
  text-transform: uppercase;
}
.about-text {
  width: 474px;
  height: 40px;
  color: #8d8f92;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
}
.number{
  width: 50px;
  height: 50px;
  background-color: #23b7a4;
  color: #fcf7f7;
  font-family: "Quattrocento Sans";
  font-size: 20px;
  font-weight: 700;
  line-height: 42px;
  text-transform: uppercase;
}
</style>
