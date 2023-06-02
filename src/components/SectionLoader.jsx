import ContentLoader from 'react-content-loader'

function SectionLoader() {
  return (
    <ContentLoader
      speed={2}
      width='100%'
      height={350}
      backgroundColor='var(--secondary-color)'
      foregroundColor='var(--primary-color)'
    >
      <rect x='50%' y='35' rx='3' ry='3' width='200' height='25' />
      <rect x='0' y='100' rx='3' ry='3' width='100%' height='7' />
      <rect x='0' y='125' rx='3' ry='3' width='95%' height='7' />
      <rect x='0' y='150' rx='3' ry='3' width='95%' height='7' />
      <rect x='0' y='175' rx='3' ry='3' width='70%' height='7' />
      <rect x='0' y='225' rx='3' ry='3' width='100%' height='7' />
      <rect x='0' y='250' rx='3' ry='3' width='100%' height='7' />
      <rect x='0' y='275' rx='3' ry='3' width='95%' height='7' />
      <rect x='0' y='300' rx='3' ry='3' width='50%' height='7' />
    </ContentLoader>
  )
}

export default SectionLoader
