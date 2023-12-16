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
    year: 2021,
    web: 'https://pabloc54.dev/mini-translator/',
    code: 'https://github.com/nanndo54/mini-translator',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    icon: MiniTranslatorIcon,
    images: [
      { src: miniTranslatorImg1, alt: 'Traduciendo del francés al español' },
      { src: miniTranslatorImg2, alt: 'Traduciendo del español al inglés' }
    ]
  },
  {
    name: 'Quiz Game',
    year: 2022,
    web: 'https://pabloc54.dev/quiz-game/',
    code: 'https://github.com/nanndo54/quiz-game',
    technologies: ['ReactJS', 'Redux', 'JavaScript', 'HTML', 'CSS'],
    icon: QuizGameIcon,
    images: [
      { src: quizGameImg1, alt: 'Menu de configuración del juego' },
      {
        src: quizGameImg2,
        alt: 'Pregunta del juego: ¿Cuál de estos países colinda con Austria?'
      },
      {
        src: quizGameImg3,
        alt: 'Pregunta del juego: ¿Cuál de estas palabras se usa para describir un grupo de abejas?'
      },
      {
        src: quizGameImg4,
        alt: 'Menú de puntuación del juego donde se observan las respuestas correctas y el tiempo transcurrido'
      }
    ]
  },
  {
    name: 'JOLC',
    year: 2022,
    web: 'https://jolc2.herokuapp.com/',
    code: 'https://github.com/nanndo54/jolc',
    technologies: ['ReactJS', 'Redux', 'Python', 'JavaScript', 'HTML', 'CSS'],
    icon: JOLCIcon,
    images: [
      { src: JOLCImg1, alt: 'JOLC 1' },
      { src: JOLCImg2, alt: 'JOLC 2' }
    ]
  }
]

export default projects
