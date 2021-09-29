import { useLayoutEffect } from 'react'

const themes = {
  light: {
    'background-color': 'rgb(230, 230, 240)',
    'font-color': 'rgb(30, 30, 40)',
    'navbar-background-color': 'rgb(210, 210, 220)',
    'navbar-decoration-color': 'rgb(55, 55, 75)',
    'section-background-color': 'rgb(225, 225, 235)',
    'small-font-color': 'rgb(75, 75, 85)',
    'link-font-color': 'rgb(60, 35, 220)',
    'link-decoration-color': 'rgb(60, 60, 230)',
    'icon-filter': 'none',
    'modal-outside': 'rgba(35, 35, 45, 0.5)',
    'shadow-color': 'rgba(45, 45, 60, 0.1)',
    'avatar-background-color': 'var(--section-background-color)',
    'button-color': 'rgb(60, 35, 220)',
    'button-font-color': 'var(--background-color)',
    'footer-background-color': 'var(--font-color)',
    'footer-font-color': 'var(--background-color)',
    'scrollbar-color': 'var(--font-color)',
    'scrollbar-track-color': 'var(--background-color)'
  },
  dark: {
    'background-color': 'rgb(30, 30, 40)',
    'font-color': 'rgb(210, 210, 220)',
    'navbar-background-color': 'rgb(40, 40, 50)',
    'navbar-decoration-color': 'rgb(80, 90, 190)',
    'section-background-color': 'rgb(35, 35, 45)',
    'small-font-color': 'rgb(175, 175, 185)',
    'link-font-color': 'rgb(60, 35, 220)',
    'link-decoration-color': 'rgb(60, 70, 180)',
    'icon-filter': 'invert(85%)',
    'modal-outside': 'rgba(35, 35, 45, 0.5)',
    'shadow-color': 'rgba(110, 110, 120, 0.2)',
    'avatar-background-color': 'var(--section-background-color)',
    'button-color': 'rgb(80, 90, 200)',
    'button-font-color': 'var(--background-color)',
    'footer-background-color': 'var(--navbar-background-color)',
    'footer-font-color': 'var(--font-color)',
    'scrollbar-color': 'var(--font-color)',
    'scrollbar-track-color': 'var(--background-color)'
  }
}

function useTheme(mode) {
  useLayoutEffect(() => {
    const theme = themes[mode]
    console.log(mode, theme)
    for (const key in theme) {
      document.documentElement.style.setProperty(`--${key}`, theme[key])
    }
  }, [mode])
}

export default useTheme
