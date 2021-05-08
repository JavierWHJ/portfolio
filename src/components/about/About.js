import React, { useState, useEffect, useRef } from "react"
import styles from "./About.module.scss"
import SectionTitle from "../shared/SectionTitle"
import profileImg from "../../images/me.jpg"

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Vue",
    "Node.js",
    "Flask",
    "Springboot",
  ]

  const certification = [
    "AWS Solution Architect Associate",
    "AWS Cloud Practitioner",
  ]

  const interests = [
    "Cooking",
    "Watching Netflix",
    "Gymming",
    "Video Games",
    "Keyboards",
  ]

  return (
    <section id="about">
      <SectionTitle title="About Me" />

      <div className={styles.inner}>
        <div>
          <p>
            Hello! I’m Javier, an aspiring software engineer living in
            Singapore. I am currently studying Information Systems (Software
            Development) in{" "}
            <span className={styles.highlight}>
              Singapore Management University.
            </span>
          </p>
          <br />
          <p>
            I enjoy creating things on the web, whether that be websites or
            applications. I also enjoy embarking on different projects and
            constantly learning new technologies to improve myself
          </p>
          <ul className={styles.tabInfo}>
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          <ul className={styles.tabInfo}>
            {certification && certification.map((cert, i) => <li key={i}>{cert}</li>)}
          </ul>
          <ul className={styles.tabInfo}>
            {interests && interests.map((interest, i) => <li key={i}>{interest}</li>)}
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.wrapper}>
            <img src={profileImg} alt="me" height="400px" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
