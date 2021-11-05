import translatorImg1 from '@assets/img/translator-img1.jpg'
import translatorImg2 from '@assets/img/translator-img2.jpg'

import quizImg1 from '@assets/img/quiz-img1.jpg'
import quizImg2 from '@assets/img/quiz-img2.jpg'

import jolcImg1 from '@assets/img/jolc-img1.jpg'
import jolcImg2 from '@assets/img/jolc-img2.jpg'

import typestyImg1 from '@assets/img/typesty-img1.jpg'
import typestyImg2 from '@assets/img/typesty-img2.jpg'

const projects = [
  {
    name: 'Mini Translator',
    url: 'https://pabloc54.github.io/translator/',
    technologies: ['JavaScript'],
    images: [translatorImg1, translatorImg2]
  },
  {
    name: 'Quiz Game',
    url: 'https://pabloc54.github.io/quiz/',
    technologies: ['ReactJS', 'Redux'],
    images: [quizImg1, quizImg2]
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
  },
  {
    name: 'Typesty',
    url: 'https://pabloc54.github.io/typesty/',
    technologies: ['ReactJS'],
    images: [typestyImg1, typestyImg2]
  }
]

export default projects
