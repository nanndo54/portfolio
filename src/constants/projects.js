import typestyImg1 from '@img/typesty-img1.jpg'
import typestyImg2 from '@img/typesty-img2.jpg'

import translatorImg1 from '@img/translator-img1.jpg'
import translatorImg2 from '@img/translator-img2.jpg'

import jolcImg1 from '@img/jolc-img1.jpg'
import jolcImg2 from '@img/jolc-img2.jpg'

const projects = [
  {
    name: 'Typesty',
    url: 'https://pabloc54.github.io/typesty/',
    technologies: ['ReactJS'],
    images: [typestyImg1, typestyImg2]
  },
  {
    name: 'Mini Translator',
    url: 'https://pabloc54.github.io/translator/',
    technologies: ['JavaScript'],
    images: [translatorImg1, translatorImg2]
  },
  // {
  //   name: 'Quiniela APP',
  //   url: 'https://pabloc54.github.io/regexive/',
  //   technologies: ['ReactJS', 'Go', 'PL/SQL', 'Oracle Cloud'],
  //   images: [jolcImg1, jolcImg2]
  // },
  {
    name: 'JOLC',
    url: 'https://jolc2.herokuapp.com/',
    technologies: ['ReactJS', 'Redux', 'Python'],
    images: [jolcImg1, jolcImg2]
  }
]

export default projects
