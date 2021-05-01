import React from "react"
import styles from "./Home.module.scss"
import bigLogo from '../../images/logo_white_large.svg';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>Hello!</h1>
        <h1>
          I'm <span className={styles.label}>Javier Wong.</span>
        </h1>
        <h1>I design and build things</h1>
        <div className={styles.separator}></div>
        <p className={styles.paragraph}>
          I'm a junior developer based in Singapore specializing in building websites and applications.
        </p>
      </div>
      <img src={bigLogo} width="1000" className={styles.logo} alt="big logo"/>
    </div>
  )
}

export default Home
