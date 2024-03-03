import React from 'react'
import Logo from '../assests/logo.png';
import styles from './header.module.css';
export default function Header() {
  return (
    <div className ={styles.header}>
        <img className={styles.logo} src={Logo} alt="AppLogo" />
        <p>Todo Task</p>
    </div>
  )
}
