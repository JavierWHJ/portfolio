import React from "react"

import "../styles/index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
