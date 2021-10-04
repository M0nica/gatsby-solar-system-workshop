import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXEmbedProvider } from "mdx-embed"
import Callout from "../components/callout"

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
          <div>
            <h1>{name}</h1>
            <h2>{orbit}</h2>
            {maxTemp}
            <img src={img} alt={name} width="250px" />
            <MDXRenderer title={name}>{data.mdx.body}</MDXRenderer>
          </div>
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
