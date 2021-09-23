import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import PlanetCard from "../components/planetCard"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Explore Planets </h1>
    <PlanetCard />
  </Layout>
)

export default IndexPage
