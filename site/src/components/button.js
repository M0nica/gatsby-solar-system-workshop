import * as React from "react"
import { Link } from "gatsby"
import * as buttonStyles from "./button.module.css"

const Button = ({ text, to }) => {
  return (
    <button className={buttonStyles.button}>
      <Link to={to}>{text}</Link>
    </button>
  )
}
export default Button
