import miniTranslatorImg1 from '#/assets/img/mini-translator-img1.jpg'
import miniTranslatorImg2 from '#/assets/img/mini-translator-img2.jpg'

import quizGameImg1 from '#/assets/img/quiz-game-img1.jpg'
import quizGameImg2 from '#/assets/img/quiz-game-img2.jpg'
import quizGameImg3 from '#/assets/img/quiz-game-img3.jpg'
import quizGameImg4 from '#/assets/img/quiz-game-img4.jpg'

import JOLCImg1 from '#/assets/img/jolc-img1.jpg'
import JOLCImg2 from '#/assets/img/jolc-img2.jpg'
import { JOLCIcon, MiniTranslatorIcon, QuizGameIcon } from '#/constants/icons'

const projects = [
  {
    name: 'Mini Translator',
    year: 2020,
    web: 'https://pabloc54.github.io/translator/',
    code: 'https://github.com/pabloc54/translator',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    icon: MiniTranslatorIcon,
    images: [miniTranslatorImg1, miniTranslatorImg2]
  },
  {
    name: 'Quiz Game',
    year: 2021,
    web: 'https://pabloc54.github.io/quiz/',
    code: 'https://github.com/pabloc54/quiz',
    technologies: ['ReactJS', 'Redux', 'JavaScript', 'HTML', 'CSS'],
    icon: QuizGameIcon,
    images: [quizGameImg1, quizGameImg2, quizGameImg3, quizGameImg4]
  },
  {
    name: 'JOLC',
    year: 2021,
    web: 'https://jolc2.herokuapp.com/',
    code: 'https://github.com/pabloc54/jolc',
    technologies: ['ReactJS', 'Redux', 'Python', 'JavaScript', 'HTML', 'CSS'],
    icon: JOLCIcon,
    images: [JOLCImg1, JOLCImg2]
  }
]

export default projects
