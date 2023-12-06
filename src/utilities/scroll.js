const handleScrollToTop = (top = 0) => {
  const base = document.getElementById('base')

  base.scrollTo({
    top,
    behavior: 'smooth'
  })
}

export { handleScrollToTop }
