const scrollToTop = () => {
  const base = document.getElementById('base')

  base.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export default scrollToTop
