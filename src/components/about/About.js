import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <div>
          <p>
            Hello! I’m Javier, an aspiring software engineer living in
            Singapore. I am currently studying Information Systems (Software
            Development) in Singapore Management University.
          </p>

          <p>
            I enjoy creating things on the web, whether that be websites or
            applications. I also enjoy embarking on many different projects and
            constantly learning new technologies to improve myself
          </p>

          <p>Here are a few technologies I've been working with recently:</p>
        </div>

        <ul className="skills-list">
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
