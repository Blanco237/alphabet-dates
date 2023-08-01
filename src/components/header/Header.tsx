import React from 'react'

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.body}>
        <a className={`${styles.link} ${styles.active}`}>Generate</a>
        <a className={styles.link}>Memories</a>
    </header>
  )
}

export default Header