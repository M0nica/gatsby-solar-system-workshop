## 09 • Add MDX (React Components) to Planet Page
## Background 📚
MDX[^1] is considered "Markdown for the component era" meaning that components can be written within Markdown files.  

MDX can be used to quickly embed third-party media, add interactive elements to a blog post, generate table of contents automatically from the Markdown content.


In order to use local components we will need to wrap the MDX provider around the markdown file's template where the components will be used. We should also pass in the components we would like that page to be able to render. This allows us to not have to worry about import statements within our actual markdown files.

```jsx
import { MDXProvider } from "@mdx-js/react"
import FancyComponent from "../components/FancyComponent"
const components = {
  FancyComponent,
}
/* ...... */
<MDXProvider components={components}>
<Page/>
</MDXProvider>
```
We can use the components we've provided the `MDXProvider` directly in our markdown files.

If we want to render components from `mdx-embed` then we will need to wrap the `MDXEmbedProvider` around our page.

```jsx 
import { MDXEmbedProvider } from "mdx-embed"
 /* ...... */
    
      <MDXEmbedProvider>
        <Page/>
      </MDXEmbedProvider>

}
```
We can then use the components from mdx-embed directly in our markdown files https://www.mdx-embed.com/?path=/docs/introduction--page
## Exercise 🤓
In this exercise we will update our planet page template (`planet.js`) to support rendering components defined within our app as well as components imported from `mdx-embed`[^2].

1. Add support for rendering components from our app to the planet.js template file by importing the appropriate provider and then use a local component like `<Callout variant="comet"> If you look up at the sky this year you might see Comet Leonard! </Callout>` within the body of a planet's markdown file. 

2. Add support for rendering components from `mdx-embed` by updating the planet.js template file by importing the appropriate provider and then using a component from `mdx-embed` like <Spotify spotifyLink="album/7253n8oKnyOumxC2trgmM8" />.

## Files 🗂
- src/data/earth.md (or the planet of your choosing!)
- src/templates/planet.js

## Example Solution Code
https://github.com/M0nica/gatsby-solar-system-workshop/pull/10/files
## Example Solution Demo
https://deploy-preview-10--gatsbysolarsystem.netlify.app/

[^1]: https://mdxjs.com/
[^2]: https://www.mdx-embed.com/