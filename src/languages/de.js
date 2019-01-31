const getHomeText = () => {
    return {
        overview: "welcome to our marketplace",
        text1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus",
    
    }
}

const getAboutContent = () => {
    return {
        title: 'We are modest.',
        text1 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. Crferm entum  quismagna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis lacusullamcorper at.",
        text2 : "Phasellus sollicitudin ante eros ornare, <b>sit amet luctus lorem semper.</b> Suspendisse posuere, quamdictum consectetur, augue metus pharetra tellus, eu feugiatloreg egetnisi. Cras ornare bibendum ante, ut bibendum odio convallis eget. vel sodales arcu vestibulum",
        facts: [
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
}

const getTeamContent = () => {
    return {
        title: 'meet the team.',
        posts: [
            {
              img:require('../assets/photos/ceo.png'), 
              name: 'Gloria Bromley',
              stelle: 'CEO and Founder'
            },
            {
              img:require('../assets/photos/development.png'),
              name: 'Paul Torres',
              stelle: 'Head of Development'
            },
            {
              img:require('../assets/photos/graphic.png'),
              name: 'Judith Gillette',
              stelle: 'Graphic Desinger'
            },
            {
              img:require('../assets/photos/director.png'),
              name: 'Delores Reed',
              stelle: 'Client Service Director'
            }
          ],
    
    }
}

const getWorkContent = () => {
  return {
      title: 'lovely work.',
      items: [
        {
          img:require('../assets/photos/bird.png'), 
          info:'Easy theme Setup',
         },
        {
          img:require('../assets/photos/dance.png'),
          info:'Easy theme Setup',
        },
          {
          img:require('../assets/photos/street.png'),
          info:'Easy theme Setup'
         }
      ],
      indexs:[
        {
          img:require('../assets/photos/sea.png'),
          info:'Easy theme Setup',
          },
          {
          img:require('../assets/photos/mountain.png'),
          info:'Easy theme Setup',
        },
          {
          img:require('../assets/photos/bird.png'),
          info:'Easy theme Setup'
        },
               
      ]
  
  }
}

const getServicesContent = () => {
  return {
      title: 'what we do.',
      items: [
        {
          text: 'Easy theme Setup',
          info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.'
        },
        {
          text: 'pixel perfect design',
          info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.'
        },
       {
          text: 'responsive display',
          info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.'
        },
        {
          text: '24/7 support',
          info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.'
        }               
      ]     
  }
}

const getFeaturesContent = () => {
  return {
      title: 'FEATURES.',
      logos: [
        {
          img:require('../assets/photos/tractor.png'), 
          brand: 'Product Design: Eames Chairs',
          product: 'Eames designs are certainly iconic. Everyone of us know at least two or three of their famous chairs. I would even risk saying that most of us dream about having a nice Eames.'
        },
         {
          img:require('../assets/photos/bicycle.png'), 
          brand: 'Elegant and Colorful Logos',
          product: 'I’ve always found logo design to be one of the most challenging things to get right. There’s so much that a logo can say about a brand without actually saying it.'
        },
          {
          img:require('../assets/photos/road.png'), 
          brand: 'A Showcase of Creative',
          product: 'It’s always interesting to see another designer’s take on a famous website, app or even physical product. Different designers add their own personality and style.'
        }
      ]  
  }
}

const getContactContent = () => {
  return {
    title:'stay in touch.',
    overtitle:'contact information',
    info1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique nec dolor non, ornare sagittis dolor. Nulla vestibulum lacus sed molestie gravida.',
    info2:'Cras fermentum elit quis magna congue, <b>vel sodales</b> arcu vestibulum. Nunc lobortis dui magna, quis dapibus lacus'
  }
}

export default {
    getHomeText, getAboutContent,getTeamContent,getWorkContent,getServicesContent,getFeaturesContent, getContactContent
}