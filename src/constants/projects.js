import translatorImg1 from '#/assets/img/translator-img1.jpg'
import translatorImg2 from '#/assets/img/translator-img2.jpg'

import quizImg1 from '#/assets/img/quiz-img1.jpg'
import quizImg2 from '#/assets/img/quiz-img2.jpg'

import jolcImg1 from '#/assets/img/jolc-img1.jpg'
import jolcImg2 from '#/assets/img/jolc-img2.jpg'

const projects = [
  {
    name: 'Mini Translator',
    web: 'https://pabloc54.github.io/translator/',
    code: 'https://github.com/pabloc54/translator',
    technologies: ['JavaScript'],
    images: [translatorImg1, translatorImg2]
  },
  {
    name: 'Quiz Game',
    web: 'https://pabloc54.github.io/quiz/',
    code: 'https://github.com/pabloc54/quiz',
    technologies: ['ReactJS', 'Redux'],
    images: [quizImg1, quizImg2]
  },
  {
    name: 'JOLC',
    web: 'https://jolc2.herokuapp.com/',
    code: 'https://github.com/pabloc54/jolc',
    technologies: ['ReactJS', 'Redux', 'Python'],
    images: [jolcImg1, jolcImg2]
  }
]

export default projects
