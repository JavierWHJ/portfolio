import React from "react"
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

  return (
    <section>
      <SectionTitle title="About Me"/>

      <div className="inner">
        <div>
          <p>
            Hello! I’m Javier, an aspiring software engineer living in
            Singapore. I am currently studying Information Systems (Software
            Development) in <span className={styles.highlight}>Singapore Management University.</span>
          </p>
          <br/>
          <p>
            I enjoy creating things on the web, whether that be websites or
            applications. I also enjoy embarking on many different projects and
            constantly learning new technologies to improve myself
          </p>
        </div>
        <br/>
        <ul className={styles.tabInfo}>
          {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
        
        <div className={styles.imageContainer}>
          <div className={styles.wrapper}>
            <img src={profileImg} alt="me" height="300px"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
