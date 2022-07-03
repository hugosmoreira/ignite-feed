import React from 'react'
import styles from './Header.module.css'
import igniteLogo from '../assets/ignitelogo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={igniteLogo} alt="Logo" />
    </header>
  )
}

export default Header