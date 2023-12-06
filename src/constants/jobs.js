import { KoloLogo } from '#/constants/icons'
import koloImg from '#/assets/img/kolo-img.jpg'

const jobs = [
  {
    company: 'Kolo',
    position: 'Full-Stack Web Developer',
    logo: KoloLogo,
    images: [{ src: koloImg, alt: 'Kolo' }],
    web: 'https://info.kolo-app.com',
    year: 2022,
    from: new Date('2022-02'),
    to: new Date('2023-11')
  }
]

export default jobs
