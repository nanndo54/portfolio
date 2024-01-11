import { jolcIcon, miniTranslatorIcon, quizGameIcon } from '#/constants/icons'
import quizGameImg1 from '/projects/quiz-game/img1.jpg'
import quizGameImg2 from '/projects/quiz-game/img2.jpg'
import quizGameImg3 from '/projects/quiz-game/img3.jpg'
import quizGameImg4 from '/projects/quiz-game/img4.jpg'
import miniTranslatorImg1 from '/projects/mini-translator/img1.jpg'
import miniTranslatorImg2 from '/projects/mini-translator/img2.jpg'
import jolcImg1 from '/projects/jolc/img1.jpg'
import jolcImg2 from '/projects/jolc/img2.jpg'

const projects = [
  {
    name: 'Quiz Game',
    year: 2023,
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
    year: 2023,
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
    year: 2022,
    web: 'https://nanndo54.dev/jolc/',
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
