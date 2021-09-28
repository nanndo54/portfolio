import React from 'react'
import ContentLoader from 'react-content-loader'

function SectionLoader() {
  return (
    <ContentLoader
      speed={2}
      width={590}
      height={350}
      backgroundColor='var(--shadow-color)'
      foregroundColor='var(--section-background-color)'
    >
      <rect x='200' y='25' rx='3' ry='3' width='200' height='20' />
      <rect x='0' y='90' rx='3' ry='3' width='590' height='6' />
      <rect x='0' y='115' rx='3' ry='3' width='580' height='6' />
      <rect x='0' y='140' rx='3' ry='3' width='580' height='6' />
      <rect x='0' y='165' rx='3' ry='3' width='290' height='6' />
      <rect x='0' y='220' rx='3' ry='3' width='590' height='6' />
      <rect x='0' y='245' rx='3' ry='3' width='590' height='6' />
      <rect x='0' y='270' rx='3' ry='3' width='570' height='6' />
      <rect x='0' y='295' rx='3' ry='3' width='210' height='6' />
    </ContentLoader>
  )
}

export default SectionLoader
