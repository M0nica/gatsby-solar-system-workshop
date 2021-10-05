import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as navStyles from "./header.module.css"

const NavLinks = ({ links }) => {
  return links.map(link => (
    <li
      style={{
        display: `inline`,
        padding: `1em`,
      }}
    >
      <Link style={{ textDecoration: `none` }} to={`/${link.href}`}>
        {link.title}
      </Link>
    </li>
  ))
}

function Header({ siteTitle, planetLinks = [] }) {
  const [planetMenuIsOpen, setPlanetMenuIsOpen] = React.useState(false)
  React.useEffect(() => {
    const setFromEvent = e => {
      if (e.key === "Escape" || e.keyCode === 27) {
        /* close the menu if the keydown key is escape */
        setPlanetMenuIsOpen(false)
      }
    }

    window.addEventListener("keydown", setFromEvent)
    return () => {
      window.removeEventListner("keydown", setFromEvent)
    }
  }, [])
  const planets = planetLinks
    .sort((a, b) => a.slug > b.slug)
    .reduce((acc, item) => {
      acc.push({ href: item.slug, title: item.frontmatter.name })
      return acc
    }, [])

  return (
    <header
      style={{
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
          fontSize: `1em`,
          flexDirection: `column`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              paddingLeft: `1em`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div className={navStyles.navigationLinks}>
          {planetMenuIsOpen ? (
            <ul className={navStyles.sidenav}>
              <button
                className={navStyles.closebtn}
                onClick={() => setPlanetMenuIsOpen(false)}
              >
                &times;
              </button>
              <NavLinks links={planets} />
            </ul>
          ) : (
            <button
              className={navStyles.openbtn}
              onClick={() => setPlanetMenuIsOpen(true)}
            >
              Planets
            </button>
          )}{" "}
          <Link style={{ textDecoration: `none` }} to="/#">
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
