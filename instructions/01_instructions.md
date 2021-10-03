# 01 • Customize Gatsby Site Information
## Background 📚
Generally important Gatsby site configuration and meta data lives within the gatsby-config.js file at the root of the site folder. `gatsby-config` is endlessly customizable however you may often see a gatsby-config.js file that resembles:

```js
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: {
      name: `Monica Powell`,
      summary: `who creates technology to elevate people.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `waterproofheart`,
    },
  },
  plugins: [// we'll talk about the Gatsby plugin ecosystem soon! ]
};
```

The `siteMetadata` from the gatsby-config can be accessed throughout the site via GraphQL queries and is a common pattern for referencing sitewide metadata within Gatsby applications. The array of plugins allow you to configure 2300+ Gatsby Plugins for your site. Check out the Gatsby site for more information on the Gatsby Config API. 

## Exercise 🤓
Customize the siteMetadata object in the gatsby-config.js with your own information (i.e, description, site title, author, etc.)
 
Note: Changes to the gatsby-config require restarting the server to see them on the site (i.e. CTRL + C and then run `npm run start`)


In order to verify that the site metadata changes in the Gatbsy Config we can hop on over to the GraphQL explorer at http://localhost:8000/___graphql?query=query%20SiteTitleQuery%20%7B%0A%20%20site%20%7B%0A%20%20%20%20siteMetadata%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20description%0A%20%20%20%20%20%20author%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=SiteTitleQuery

and run the following query

```
query SiteTitleQuery {
  site {
    siteMetadata {
      title
      description
      author
    }
  }
}
```
## Files 🗂
- gatsby-config.js

## Extra Credit 💯
- Build your own query and/or add additional fields to the siteMetadata

## Related Files 🗂
- gatsby-config.js

## Example Solution Code
https://github.com/M0nica/gatsby-solar-system/pull/2/files

## Example Solution Demo
https://deploy-preview-2--gatsbysolarsystem.netlify.app/

## Next Exercise
[02 • Make Navigation and Footer Data Dynamic](02_instructions.md)

