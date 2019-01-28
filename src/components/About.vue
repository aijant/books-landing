<template>
 <div class="about">
    <div class="container">
      <h4 class="about-title">{{ title }}</h4>
      <div class="block">
        <div class="content">
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. Crferm entum  quismagna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis lacusullamcorper at. </p>
          <p class="text">Phasellus sollicitudin ante eros ornare, <b>sit amet luctus lorem semper.</b> Suspendisse posuere, quamdictum consectetur, augue metus pharetra tellus, eu feugiatloreg egetnisi. Cras ornare bibendum ante, ut bibendum odio convallis eget. vel sodales arcu vestibulum</p>
          <div class="social-block">
            <a v-for="link in links"
              class="icon" href="#">
              <img :src="getIconPath(link.icon)">
            </a> 
          </div>
        </div>
        <div class="listest">
          <div class="item" v-for="item in items">
            <div class="number">{{ item.number }}</div>
            <div class="items-overview">
              <h3 class="item-title"> {{ item.title }}</h3>
              <p class="about-text">{{ item.content }}</p>
            </div>
          </div>
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
          icon: 'facebook.png',
         },
        {
          icon: 'linkedin.png',
         },
        {
          icon: 'google.png',
         },
        {
          icon: 'Dribble.png',
         },
        {
          icon: 'Bechance.png',
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

.about {
  height: 460px;
  border-bottom: 1px solid #dde1e4;
}

.container {
  width: 1050px;
  margin: 0 auto;
}
.about-title {
  text-align: left;
  padding-left: 18px;
  border-left: 5px solid #e1e6ea;
  color: #292f36;
  font-size: 18px;
  margin-left: 55px;
  font-weight: 700;
  line-height: 42px;
  text-transform: uppercase;
}

.content {
  width: 457px;
  height: 222px;
  color: #8d8f92;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  float: left;
  text-align: justify;
  margin-left: 55px;
}

.content .text {
  margin: 0;
  padding-bottom: 15px;
}

.icon {
  width: 60px;
  height: 60px;
  background-color: #c8cdd0;
  color: #ffffff;
  font-size: 30px;
  font-weight: 400;
  line-height: 86px;
  text-transform: uppercase;
  padding: 13px;
  margin: 1px;
}

.listest{
  float: right;
  width: 518px;
}

.item {
  height: 120px;
}

.number {
  width: 50px;
  height: 50px;
  background-color: #23b7a4;
  color: #fcf7f7;
  font-family: "Quattrocento Sans";
  font-size: 20px;
  font-weight: 700;
  line-height: 42px;
  text-transform: uppercase;
  float: left;
}

.items-overview {
  padding-left: 20px;
  float: right;
}

.item-title {
  width: 448px;
  height: 34px;
  color: #292f36;
  font-size: 18px;
  font-weight: 700;
  line-height: 12px;
  text-transform: uppercase;
  text-align: left;
}

.about-text {
  width: 379px;
  height: 43px;
  color: #8d8f92;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
}

</style>
