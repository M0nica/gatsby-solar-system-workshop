import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXEmbedProvider } from "mdx-embed"
import Callout from "../components/callout"
import PlanetFacts from "../components/planetFacts"

const components = {
  Callout,
}

export default function planetPage({ data }) {
  const planet = data.mdx.frontmatter
  const { name, orbit, img, maxTemp } = planet
  return (
    <MDXProvider components={components}>
      <MDXEmbedProvider>
        <Layout>
          <PlanetFacts name={name} orbit={orbit} img={img} maxTemp={maxTemp} />
          <MDXRenderer title={name}>{data.mdx.body}</MDXRenderer>
        </Layout>
      </MDXEmbedProvider>
    </MDXProvider>
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
      body
    }
  }
`
