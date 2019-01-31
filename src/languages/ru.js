const getHomeText = () => {
    return {
        overview: "Добро пожаловать на наш рынок",
        text1:"Эксклюзивный дизайн лучшего флориста",
    
    }
}

const getAboutContent = () => {
    return {
        title: 'Мы скромны.',
        text1 : "Язык цветов – помощник для тех, кто хочет выразить чувство восхищения, уважения, любви, благодарности без слов. Роскошный букет, врученный по случаю или без него, расскажет всё о вашем отношении к адресату.",
        text2 : "В магазине цветов вам помогут собрать композицию, которая станет <b>идеальным дополнением к любому подарку</b>, приятным знаком внимания для близкого человека. ",
        facts: [
            {
              number: '01',
              title: 'Цветы помогут вам найти гармонию',
              content: 'Наш мир невозможно представить без растений. Они являются источником кислорода, пищи и украшением нашей жизни.'
            },
            {
              number: '02',
              title: 'работая с клиентами',
              content: 'Для того, чтобы получить ответ более быстро, рекомендуется использовать наш Ticket-system.'
            },
            {
              number: '03',
              title: 'увеличить счастье',
              content: 'Мы постараемся ответить на ваши вопросы в течение 1-10 часов.'
            }
          ] 
    }
}

const getTeamContent = () => {
    return {
        title: 'Встречайте нашу команду.',
        posts: [
            {
              img:require('../assets/photos/ceo.png'), 
              name: 'Глория Бромли ',
              stelle: 'директор и основатель'
            },
            {
              img:require('../assets/photos/development.png'),
              name: 'Пол Торрес',
              stelle: 'Руководитель развития'
            },
            {
              img:require('../assets/photos/graphic.png'),
              name: 'Джудит Джиллетт',
              stelle: 'Графический дизайнер'
            },
            {
              img:require('../assets/photos/director.png'),
              name: 'Делорес Рид',
              stelle: 'Директор по обслуживанию клиентов'
            }
          ],
    
    }
}

const getWorkContent = () => {
  return {
      title: 'прекрасная работа.',
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
      title: 'что мы делаем.',
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
      title: 'ФУНКЦИИ.',
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
    title:'оставайтесь на связи.',
    overtitle:'kонтактная информация',
    info1:'Придя в магазин, мы в первую очередь стараемся как можно быстрее найти нужный товар.',
    info2:'Магазин предлагает готовые букеты из свежих цветов или оказание помощи в выборе комнатного растения.'
    
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