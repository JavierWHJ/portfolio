import React from "react"
import styles from "./Home.module.scss"
import bigLogo from '../../images/logo_white_large.svg';
import TypeIt from "typeit-react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { Link } from "gatsby";

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
        <div className={styles.icons}>
          <Link to="https://www.github.com/javierwhj" target="_blank">
            <AiFillGithub size={30}/>
          </Link>
          <Link to="https://www.linkedin.com/in/javierwhj" target="_blank">
            <AiFillLinkedin size={30}/>
          </Link>
          <Link to="https://www.instagram.com/harveyair.w/" target="_blank">
            <AiFillInstagram size={30}/>
          </Link>
          <a href="mailto:javierwhj@gmail.com">
            <AiFillMail size={30}/>
          </a>
        </div>
      </div>
      <img src={bigLogo} width="800" className={styles.logo} alt="big logo"/>
    </div>
  )
}

export default Home
