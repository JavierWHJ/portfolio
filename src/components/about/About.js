import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./About.module.scss"
import SectionTitle from "../shared/SectionTitle"

const About = () => {

  const data = useStaticQuery(graphql`
    query {
      avatar: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "me.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const skills = [
    "JavaScript (ES6+)",
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

        {/* <StyledPic>
          <div className="wrapper">
            <Img
              fluid={data.avatar.childImageSharp.fluid}
              alt="Avatar"
              className="img"
            />
          </div>
        </StyledPic> */}
      </div>
    </section>
  )
}

export default About
