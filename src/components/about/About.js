import React, { useState, useEffect, useRef } from "react"
import styles from "./About.module.scss"
import SectionTitle from "../shared/SectionTitle"
import profileImg from "../../images/me.jpg"

const About = () => {
  const [activeTabId, setActiveTabId] = useState(0)

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
    "Netflix",
    "Lifting Weights",
    "Video Games",
    "Keyboards",
  ]

  const titles = ["Skills", "Certification", "Interests"]
  const contents = [skills, certification, interests]

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
          <div className={styles.tablist}>
            {titles.map((title, i) => {
              return (
                <button
                  key={i}
                  id={`tab-${i}`}
                  className={styles.tab}
                  onClick={() => setActiveTabId(i)}
                >
                  {title}
                </button>
              )
            })}
          </div>
          <div className={styles.panels}>
            {contents.map((content, i) => {
              return (
                <div className={styles.panel} hidden={activeTabId !== i}>
                  <ul className={styles.tabinfo}>
                    {content && content.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
              )
            })}
          </div>
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
