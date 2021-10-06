# 08 • Add Plaintext Content to Planet Page

## Background 📚

So far we've been rendering only frontmatter data on the individual planet pages with the following:

```gql
 graphql`
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
```

In order to render additional content from the planet `.mdx`  outside of the frontmatter at the top of the file we will need:

1) to update our query to also query for the `body` of our mdx files.

2) We will then be able to use the `MDXRenderer` to render the body within the planet template.

 > MDXRenderer is a React component that takes compiled MDX content and renders it. You will need to use this if your MDX content is coming from a GraphQL page query or StaticQuery. Source: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#mdxrenderer

 ```js
 import { MDXRenderer } from "gatsby-plugin-mdx"
 <MDXRenderer title={name}>
 {/*body from data returned by GraphQL Query*/}
 </MDXRenderer>
 ```

 MDX as opposed to plain Markdown enables us to use JSX syntax and Markdown within the same files to more easily compose complex content with the power of JSX and the generally more straightforward syntax of Markdown.

## Exercise 🤓
- Update the individual planet pages to include summary content from the body of those files in addition to the current frontmatter/meta data that is appearing on those pages. 


## Files 🗂
- src/data/earth.md (or another planet)
- src/templates/planet.js



## Example Solution Code
- https://github.com/M0nica/gatsby-solar-system/pull/9/files

## Example Solution Demo
-  https://deploy-preview-9--gatsbysolarsystem.netlify.app/

## Next Exercise:
[09 •  Add MDX (React Components) to Planet Page](09_instructions.md)
