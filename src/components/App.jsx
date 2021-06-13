import React from 'react'
import styles from '../styles/App.module.css'
import Navbar from './Navbar'

function App() {
  return (
    <div className={styles.base}>
      <Navbar />
      <h3>titulo</h3>
      <p>aplicacion</p>
    </div>
  )
}

export default App
