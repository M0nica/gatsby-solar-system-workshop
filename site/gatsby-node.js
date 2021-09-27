/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)

const path = require(`path`)

// onCreateNode is called when a node is created
// this API allows us to modify nodes during the creation process
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // we only care about the Mdx node type where our planet data is defined
  if (node.internal.type === `Mdx`) {
    // let's add a new field to the node for the slug
    createNodeField({
      node,
      name: `slug`,
      value: `planet/${node.name.toLowerCase()}`,
    })
  }
}

// createPages lets us programmatically create pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // lets query to get back all of the slugs that we generated for planet data
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // for each planet that was returned from the above graphql query
  // let's create a new page at it's slug using the planets component
  // the planets page component has a query that relies on the slug being passed in,
  // we'll pass in the slug via the context parameter in createPage
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/planet.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}
