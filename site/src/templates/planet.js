import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PlanetFacts from "../components/planetFacts"

export default function planetPage({ data }) {
  const planet = data.mdx.frontmatter
  const { name, orbit, img, maxTemp } = planet
  return (
    <Layout>
      <PlanetFacts name={name} orbit={orbit} img={img} maxTemp={maxTemp} />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        name
        orbit
        img
        maxTemp
      }
    }
  }
`
