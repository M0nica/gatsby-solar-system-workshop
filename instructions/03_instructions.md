# 03 • Create a new page in Gatsby

## Background 📚

Gatsby automagically turns Reacts component defined in `src/pages/*`into pages. The page will be created based on the default export in the file. For example you can look at the starter code and see that the component defined in `src/pages/index.js` is used to generate the site’s index.html file. 
 
## Exercise 🤓

### Part 1  - Creating Contact Page
1. Create a new file `contact.js` in `src/pages` and import the `<ContactInfo/>` component from the components directory. 
2. Go to http://localhost:8000/contact to view the base Contact page    
3. Update the `hardCodedLinks` in the `header.js` so that the "Contact" link directs to our newly created Contact Page.

### Part 2 - Update Contact Info to use Data from `gatsby-config`
3. Add fake `phoneNumber` and `emailAddress` contact information to the `gatsby-config`
4. Update the contact info page to dynamically replace placeholder contact info with mock contact information  from the `gatsby-config` file. 

## Example Code for Rendering _Home_ Page component
 
```jsx
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
``` 
 
## Files 🗂
- src/pages/contact.js[^1]
- src/components/header.js
- src/components/contactInfo.js
- /gatsby-config.js

## Extra Credit 💯
Make additional customizations to the /contact page 

## Example Solution Code
- https://github.com/M0nica/gatsby-solar-system/pull/4/files

## Example Solution Demo
- https://deploy-preview-4--gatsbysolarsystem.netlify.app

## Next Exercise:
[04 •  Adding Planet Data to the GraphQL Server](04_instructions.md)

[^1]: This Contact page component will be created during this exercise.
