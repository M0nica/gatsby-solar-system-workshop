# 04 • Adding Planet Data to the GraphQL Server

## Background 📚
The Gatsby ecosystem involves a wide variety of plugins that help support the core functionality of Gatsby sites as well as provide additional enhancements. A popular Gatsby plugin is the [gatsby-source-file-system plugin](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/) which enables you to add local data to the site’s internal GraphQL API. 
 
> The plugin creates File nodes from files. The various “transformer” plugins can transform File nodes into various other types of data e.g. gatsby-transformer-json transforms JSON files into JSON data nodes and gatsby-transformer-remark transforms markdown files into MarkdownRemark nodes from which you can query an HTML representation of the markdown.


In order to use the `gatsby-source-filesystem` plugin once it is installed as a project dependency you will need to update the `gatsby-config.js` file to use the plugin. This is the same file where we configured the site meta data earlier. In addition to the `siteMetaData` key of the config object is an array named `plugins` which is where Gatsby plugins are generally installed.
In our case in addition to using the gatsby-source-filesystem plugin we should use the `gatsby-plugin-mdx`  plugin to parse data from YAML files. Below is an example of a `gatsby-config.js` where the plugins has the gatsby-source-filesystem configured to add the data that lives in the `images` directory to its GraphQL API. 
 
 
```js
module.exports = () => ({
  siteMetadata: {
    title: `Gatsby Solar System`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@m0nica`,
    siteUrl: `https://TBD.com/`,
  },
 plugins: [ 
   {
     resolve: `gatsby-source-filesystem`,
     options: {
     path: `${__dirname}/src/images`,
     },
   },
 ]
});
```

 The configuration we will need for for `gatsby-plugin-mdx` to properly parse `.mdx` and `.md` files looks like:

 ```js
  {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
      },
    }
```
 
## Exercise 🤓
Add a new data type for planets. Hint: You will need to configure `gatsby-plugin-mdx`  and `gatsby-source-filesystem` to use `src/data` (as a separate entry in the plugins array) in the `gatsby-config` file. 

## Files 🗂
- site/gatsby-config.js

For the path of the data you can use the pre-existing planet data which lives in `site/src/data`
 
If you successfully added the planet data to the GraphQL API then you can run: 

```graphql
query fetchPlanets {
  allMdx {
    edges {
      node {
        id
        frontmatter {
          img
          name
          maxTemp
          orbit
        }
      }
    }
  }
}

```

  in the [GraphQL Playground](http://localhost:8000/___graphql?query=query%20fetchPlanets%20%7B%0A%20%20allMdx%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20frontmatter%20%7B%0A%20%20%20%20%20%20%20%20%20%20img%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20maxTemp%0A%20%20%20%20%20%20%20%20%20%20orbit%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=fetchPlanets) and have it return something that looks like: 
  
  ```json
  {
  "data": {
    "allMdx": {
      "edges": [
        {
          "node": {
            "id": "d88334e6-84bf-53df-852a-f8817a13e019",
            "frontmatter": {
              "img": "./jupiter.svg",
              "name": "Jupiter",
              "maxTemp": "1,340 °F (725 °C)",
              "orbit": "12 years"
            }
          }
        },
        {
          "node": {
            "id": "0ec595bf-c8b8-5507-acc3-cd50d883c08a",
            "frontmatter": {
              "img": "./earth.svg",
              "name": "Earth",
              "maxTemp": "134.1 °F (56.7 °C)",
              "orbit": "365 days"
            }
          }
        },
        {
          "node": {
            "id": "bf0037dc-12fc-5c9a-aedc-834b4a781d63",
            "frontmatter": {
              "img": "./mercury.svg",
              "name": "Mercury",
              "maxTemp": "800°F (430°C)",
              "orbit": "88 days"
            }
          }
        },
        {
          "node": {
            "id": "c826a6f4-3149-57e0-b538-9e0099427443",
            "frontmatter": {
              "img": "./neptune.svg",
              "name": "Neptune",
              "maxTemp": "-328 °F (-200 °C)",
              "orbit": "165 years"
            }
          }
        },
        {
          "node": {
            "id": "fe9ffecb-7eb8-5556-baa4-2cd4157c7327",
            "frontmatter": {
              "img": "./saturn.svg",
              "name": "Saturn",
              "maxTemp": "134 °F (57 °C)",
              "orbit": "29 years"
            }
          }
        }
      ]
    }
  }
}
```



## Example Solution Code
https://github.com/M0nica/gatsby-solar-system/pull/5/files

## Example Solution Demo
https://deploy-preview-5--gatsbysolarsystem.netlify.app

## Next Exercise:
[05 •  Programmatically Create Page for Each Planet](05_instructions.md)

