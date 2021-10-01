import typestyImg1 from '@img/typesty-img1.jpg'
import typestyImg2 from '@img/typesty-img2.jpg'
import regexiveImg1 from '@img/regexive-img1.jpg'
import regexiveImg2 from '@img/regexive-img2.jpg'
import jolcImg1 from '@img/jolc-img1.jpg'
import jolcImg2 from '@img/jolc-img2.jpg'

const projects = [
  {
    name: 'Typesty',
    description: 'Interfaz web para ejecución de un lenguaje parecido a JavaScript',
    url: 'https://pabloc54.github.io/typesty/',
    technologies: ['ReactJS'],
    images: [typestyImg1, typestyImg2]
  },
  {
    name: 'Regexive',
    description: 'Interfaz de escritorio para el testing de expresiones regulares',
    url: 'https://pabloc54.github.io/regexive/',
    technologies: ['Java'],
    images: [regexiveImg1, regexiveImg2]
  },
  {
    name: 'Quiniela APP',
    description: 'Página web para un negocio de quinielas',
    url: 'https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/',
    technologies: ['ReactJS', 'Go', 'PL/SQL', 'Oracle Cloud'],
    images: [jolcImg1, jolcImg2]
  },
  {
    name: 'JOLC',
    description: 'Intérprete de Julia ejecutable en la web',
    url: 'https://jolc2.herokuapp.com/',
    technologies: ['ReactJS', 'Python'],
    images: [jolcImg1, jolcImg2]
  }
]

export default projects
