import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const hardCodedLinks = [
  {
    title: "Home",
    href: "/",
  },
  { title: "Contact", href: "#" },
]

const NavLinks = () => {
  return hardCodedLinks.map(link => (
    <li
      style={{
        display: `inline`,
        padding: `1em`,
      }}
    >
      <Link style={{ textDecoration: `none` }} to={link.href}>
        {link.title}
      </Link>
    </li>
  ))
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#020524`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1600,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
        fontSize: `1.5em`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul>
        <NavLinks />
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
