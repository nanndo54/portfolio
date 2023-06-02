const handleScroll = (coords, direction = 'down') => {
  const base = document.getElementById('base')
  const top = direction === 'down' ? base.scrollTop + coords.y + 120 : 0

  base.scrollTo({
    top,
    behavior: 'smooth'
  })
}

const handleScrollToTop = () => {
  const base = document.getElementById('base')

  base.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export { handleScroll, handleScrollToTop }
