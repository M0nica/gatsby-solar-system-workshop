import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function planetPage({ data }) {
  const planet = data.mdx.frontmatter
  const { name, orbit, img, maxTemp } = planet
  return (
    <Layout>
      <div>
        <h1>{name}</h1>
        <h2>{orbit}</h2>
        {maxTemp}
        <img src={img} alt={name} width="250px" />
      </div>
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
