# 05 • Programmatically Create Page for Each Planet

## Background 📚

The `gatsby-node.js` file is a special file that allows developers to programmatically control what data is available in a Gatsby site's GraphQL data layer and how it will be shaped. 
It's often the place where pages, such as blog posts, are programmatically generated or additional fields may be added to the GraphQL schema. `gatsby-node.js` is run once during the process of building your site. Check out https://www.gatsbyjs.com/docs/node-apis/ in order to view the various Node APIs that are available to use in `gatsby-node.js`

We'll be using the [onCreateNode](https://www.gatsbyjs.com/docs/node-apis/#onCreateNode) API to modify the GraphQL data to have a specified URL slug for each talk/speaker and the [createPages](https://www.gatsbyjs.com/docs/node-apis/#createPages) API to actually generate the pages for individual planet data when the Gatsby site is building. 


Pages created with `createPages` can have specific data available to them via the context object. 
```js
createPage({
      path: node.fields.flavor,
      component: path.resolve(`./src/templates/ice-cream.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        flavor: node.fields.flavor,
      },
    });
  ```
  
  The above `createPage()` function creates a new page for a given flavor with the `ice-cream.js` template and then passes the `flavor` into the template's context. The template can then construct queries with variables such as the below query which queries icecreamFlavor by flavor and returns the id, flavor, description and nutritionInfo associated with that flavor. 
 
```graphql
export const query = graphql`
  query IceCreamDescription($flavor: String) {
    mdx(icecreamFlavor: {eq: $flavor}) {
      id
      flavor
      description
      nutritionInfo
    }
  }
`
```

## Exercise 🤓

- Generate a standalone planet page for each planet by updating the `gatsby-node.js` file (starter code below)
- Create a src template at `src/templates/planet.js` that renders the planet data that is passed into the template from `createPages` (i.e., name, orbit, maxTemp, img). You can use the PlanetFacts component from `src/components` or write your own markup to render the relevant planet information.

## Notes: 
- You will need to restart server after making changes to `gatsby-node.js` You should see a warning in terminal with `warn develop process needs to be restarted to apply the changes to
gatsby-node.js` when the server needs to be restarted

- Visit https://localhost:8000/slug or another non-existent URL to view a list of all of the valid pages for the site. The planet pages should appear on that page if the pages were succesfully generated.
  

## Starter Code

- Add a `gatsby-node.js` file in the root of the site with the following code:
  
```js
const { createFilePath } = require(`gatsby-source-filesystem`)

const path = require(`path`)

// onCreateNode is called when a node is created
// this API allows us to modify nodes during the creation process
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // we only care about the Mdx node type where our planet data is defined
  if (node.internal.type === `Mdx` && node?.name) {
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
```

We'll need to write a GraphQL query to get data for the `templates/planet.js` file. The below GraphQL query stub uses the variable `$slug` to query based on the current slug and return the requested data for the mdx node that matches that slug. 

```graphql
import { graphql } from "gatsby";

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
     """
     data you'd like to query 
     """
    }
  }
`
```
## Files 🗂

- `src/templates/planets.js`
- `src/gatbsy-node.js`
- `src/components/planetFacts`


## Example Solution Code
- https://github.com/M0nica/gatsby-solar-system/pull/6/files

## Example Solution Demo
- https://deploy-preview-6--gatsbysolarsystem.netlify.app/

## Next Exercise:
[06 • Add Links to Card Component](06_instructions.md)
