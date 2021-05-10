import React from "react"
import SectionTitle from "../shared/SectionTitle"
import { useStaticQuery, graphql } from 'gatsby';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `)

  return (
    <section id="projects">
      <SectionTitle title="Projects" />
    </section>
  )
}

export default Projects
