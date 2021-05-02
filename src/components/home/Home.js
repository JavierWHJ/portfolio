import React from "react"
import styles from "./Home.module.scss"
import bigLogo from '../../images/logo_white_large.svg';
import TypeIt from "typeit-react";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>Hello!</h1>
        <h1>
          <TypeIt className={styles.label}>I'm Javier Wong.</TypeIt>
        </h1>
        <h1>I design and build things.</h1>
        <div className={styles.separator}></div>
        <p className={styles.paragraph}>
          I'm a junior developer based in Singapore specializing in building websites and applications.
        </p>
      </div>
      <img src={bigLogo} width="800" className={styles.logo} alt="big logo"/>
    </div>
  )
}

export default Home
