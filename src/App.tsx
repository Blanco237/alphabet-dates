import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './app.module.css'
import Header from './components/header/Header'
import Generate from './components/generate/Generate'

import cupid from './assets/card_cupid.png';
import dice from './assets/card_dice.png'
import gender from './assets/card_gender.png'
import weddingRings from './assets/card_wedding_rings.png'

function App() {

  return (
    <main className={styles.body} style={{paddingTop: '3rem',paddingBottom: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3rem'}}>
      <Header />
      <Generate />
      <img className={`${styles.image} ${styles.cupid}`} src={cupid} />
      <img className={`${styles.image} ${styles.dice}`} src={dice} />
      <img className={`${styles.image} ${styles.gender}`} src={gender} />
      <img className={`${styles.image} ${styles.weddingRings}`} src={weddingRings} />
    </main>
  )
}

export default App
