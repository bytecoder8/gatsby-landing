import React from 'react';
import styles from './header.module.scss';


const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.logo}>Ghost</div>
    <ul className={styles.menu}>
      <li><a href="#!">How it works</a></li>
      <li><a href="#!">Features</a></li>
      <li><a href="#!">Supported stores</a></li>
      <li><a href="#!">FAQ</a></li>
      <li><a href="#!">Blog</a></li>
      <li><a href="#!">Contacts</a></li>
    </ul>
    <button className={styles.loginButton}>Login</button>
  </header>
);

export default Header;
