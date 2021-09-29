# 07 • Add Dynamic Links to Navigation

## Background 📚

We just hard-coded the links for Exercise 6 but we can be smarter by writing a GraphQL query to retrieve the slugs for the planets (in `layout`) and then map through those links in the `header`.

In `layout` we already have a GraphQL query that resembles

```graphql
 const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
     """
     We can add a new query here to run a separate query within the SiteTitleQuery 
     ""'
    }
  `)
  ```

## Exercise 🤓
- Update the header to display working links for every single planet. Ideally this should be done with GraphQL as opposed to hard-coded.

## Files 🗂
- src/components/layout.js
- src/components/header.js

## Example Solution Code
- https://github.com/M0nica/gatsby-solar-system/pull/8

## Example Solution Demo
-  https://deploy-preview-8--gatsbysolarsystem.netlify.app