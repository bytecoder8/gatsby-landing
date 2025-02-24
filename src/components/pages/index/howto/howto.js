import React, { useRef, useEffect } from 'react'
import styles from './howto.module.scss';


function Card({ card: { number, header, text } }) {

  const className = styles['card'] + ' ' + styles['card'+number]

  return (
    <div className={className}>
      <div className={styles.cardImageContainer}>
        <div className={styles.cardImageText}>{number}</div>
        <img className={styles.cardImage} src={`/static/svg/${number}.svg`} alt={number} />
      </div>
      <div className={styles.cardDescription}>
        <header className={styles.cardHeader}>{header}</header>
        <p className={styles.cardText}>
          {text}
        </p>
      </div>
    </div>
  )
}


function Howto() {
  const cards = [
    {
      number: 1,
      header: 'Install the app',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    },
    {
      number: 2,
      header: 'Create profile',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    },
    {
      number: 3,
      header: 'Create a task',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    },
    {
      number: 4,
      header: 'Track task status',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    },
  ]

  const observer = useRef()
  const cardsRef = useRef(null)

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add(styles.animated)
          observer.current.unobserve(entry.target)
        }
      })
    })

    observer.current.observe(cardsRef.current)

    return () => {
      observer.current.disconnect()  
    }
  }, [cardsRef])


  return (
    <section className={styles.howto}>
      <h2 className={styles.header}>How it works</h2>
      <div className={styles.cards} ref={cardsRef}>
        { cards.map( card => 
          <Card card={card} key={card.number} />
        ) }        
      </div>
    </section>
  )
}

export default Howto
