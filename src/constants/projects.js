import quizGameIcon from '#/assets/projects/quiz-game/icon.svg?react'
import miniTranslatorIcon from '#/assets/projects/mini-translator/icon.svg?react'
import jolcIcon from '#/assets/projects/jolc/icon.svg?react'

import quizGameImg1 from '#/assets/projects/quiz-game/img1.jpg'
import quizGameImg2 from '#/assets/projects/quiz-game/img2.jpg'
import quizGameImg3 from '#/assets/projects/quiz-game/img3.jpg'
import quizGameImg4 from '#/assets/projects/quiz-game/img4.jpg'
import miniTranslatorImg1 from '#/assets/projects/mini-translator/img1.jpg'
import miniTranslatorImg2 from '#/assets/projects/mini-translator/img2.jpg'
import jolcImg1 from '#/assets/projects/jolc/img1.jpg'
import jolcImg2 from '#/assets/projects/jolc/img2.jpg'

const projects = [
  {
    name: 'Quiz Game',
    year: 2022,
    web: 'https://nanndo54.dev/quiz-game/',
    code: 'https://github.com/nanndo54/quiz-game',
    technologies: ['ReactJS', 'Redux', 'JavaScript', 'HTML', 'CSS'],
    icon: quizGameIcon,
    images: [
      {
        src: quizGameImg1,
        alt: 'Menu de configuración del juego'
      },
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
    name: 'Mini Translator',
    year: 2022,
    web: 'https://nanndo54.dev/mini-translator/',
    code: 'https://github.com/nanndo54/mini-translator',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    icon: miniTranslatorIcon,
    images: [
      {
        src: miniTranslatorImg1,
        alt: 'Traduciendo del francés al español'
      },
      {
        src: miniTranslatorImg2,
        alt: 'Traduciendo del español al inglés'
      }
    ]
  },
  {
    name: 'JOLC',
    year: 2021,
    web: 'https://jolc2.herokuapp.com/',
    code: 'https://github.com/nanndo54/jolc',
    technologies: ['ReactJS', 'Redux', 'Python', 'JavaScript', 'HTML', 'CSS'],
    icon: jolcIcon,
    images: [
      { src: jolcImg1, alt: 'JOLC 1' },
      { src: jolcImg2, alt: 'JOLC 2' }
    ]
  }
]

export default projects
