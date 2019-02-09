const getHomeText = () => {
    return {
        overview: "welcome to our marketplace",
        text1:"Exclusive design by best Florists",
    
    }
}

const getAboutContent = () => {
    return {
        title: 'We are modest.',
        text1 : "The language of flowers is an assistant for those who want to express a feeling of admiration, respect, love, and gratitude without words. A luxurious bouquet, given on occasion or without it, will tell you all about your attitude towards the addressee.",
        text2 : "The flower shop will help you to build a composition that will be the perfect addition to any gift, a pleasant sign of attention for a loved one.",
        facts: [
            {
              number: '01',
              title: 'Flowers Help You Find the Harmony',
              content: 'Integer vel lacus non dui ullamcorper venenatis. Aliquam vitae tristique nisi, vitae ullamcorper risus.'
            },
            {
              number: '02',
              title: 'working closely with our clients',
              content: 'To get a response more promptly, you are recommended to use our Ticket-system.'
            },
            {
              number: '03',
              title: 'increase happiness',
              content: 'We try to answer your questions within 1-10 hours.'
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
         },
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
          text: 'Bride’s & Bridesmaids’ Bouquets',
          info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.',
          icon: 'cogs.png'
        },
        {
          text: 'pixel perfect design',
          info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.',
          icon: 'pencil.png',
        },
        {
          text: 'Making the ceremony',
          info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.',
          icon: 'mobile.png',
       },
       {
          text: 'A Fairytale for a Modern Princess',
          info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.',
          icon: 'clock.png',
       },
       {
          text: 'Bride’s & Bridesmaids’ Bouquets',
          info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.',
          icon: 'cogs.png'
        },
        {
          text: 'pixel perfect design',
          info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.',
          icon: 'pencil.png',
        },
        {
          text: 'Making the ceremony',
          info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.',
          icon: 'mobile.png',
       },
       {
          text: 'A Fairytale for a Modern Princess',
          info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.',
          icon: 'clock.png',
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
    info1:'Having come to the store, we first of all try to find the right product as soon as possible.',
    info2:'The store offers ready-made bouquets of fresh flowers or assistance in choosing a houseplant.'
  }
}

export default {
    getHomeText,
    getAboutContent,
    getTeamContent,
    getWorkContent,
    getServicesContent,
    getFeaturesContent, 
    getContactContent
}