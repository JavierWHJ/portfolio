import React from "react"

import "../styles/index.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/home/Home"
import About from "../components/about/About"
import Work from "../components/work/Work"
import Projects from "../components/projects/Projects"
import Contact from "../components/contact/Contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home />
    <About />
    <Work />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
