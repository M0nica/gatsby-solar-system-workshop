# 06 • Add Links to Card Component

## Background 📚
Our site's Button component uses the [Gatsby Link](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/) component under the hood. Gatsby uses the `<Link>` component to improve the loading time of internal pages by being able to preload additional pages in the background as a user navigates closer to the link. It is preferable for internal links to use `<Link>` instead of a traditional anchor tag.

## Exercise 🤓
- Update the `button` in `planetCard` to go `to` the actual planet pages instead of `#`. The value passed to `to` should be the same one that `href` would be use for a traditional link.

```diff
- <Button text="Learn More" to="#" />
+ <Button text="Learn More" to={ACTUAL LINK TO PLANET PAGE} />
```

## Files 🗂
- src/components/planetCard.js

## Example Solution Code
- https://github.com/M0nica/gatsby-solar-system/pull/7/files

## Example Solution Demo
-  https://deploy-preview-7--gatsbysolarsystem.netlify.app

## Next Exercise:
[07 • Add Dynamic Links to Navigation](07_instructions.md)
