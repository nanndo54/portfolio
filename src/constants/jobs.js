import { koloIcon } from '#/constants/icons'
import koloImg1 from '/job-experience/kolo/img1.jpg'
import koloImg2 from '/job-experience/kolo/img2.jpg'
import koloImg3 from '/job-experience/kolo/img3.jpg'
import koloImg4 from '/job-experience/kolo/img4.jpg'

const jobs = [
  {
    company: 'Kolo',
    position: 'Full-Stack Web Developer',
    logo: koloIcon,
    images: [
      { src: koloImg1, alt: 'Kolo' },
      { src: koloImg2, alt: 'Kolo' },
      { src: koloImg3, alt: 'Kolo' },
      { src: koloImg4, alt: 'Kolo' }
    ],
    web: 'https://info.kolo-app.com',
    year: 2022
  }
]

export default jobs
