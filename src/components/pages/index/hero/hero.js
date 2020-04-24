import React from 'react'
import styles from './hero.module.scss';


function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.block}>
        <header className={styles.header}>
          <h1 className={styles.heading}>buy iconic shoes</h1>
          <h2 className={styles.subHeading}>with automated software</h2>
        </header>
        <button className={styles.button}>
          Not Available
          <img className={styles.question} src="/static/svg/q-1.svg" />
        </button>
      </div>
    </section>
  )
}

export default Hero
