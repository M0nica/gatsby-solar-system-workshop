import React from "react"
import * as styles from "./callout.module.css"

export default function Callout({ variant = "comet", children }) {
  const classes = `${styles.infoBox} ${styles[variant]}`

  const variantStyles = {
    comet: {
      borderLeft: "4px solid #382f7e",
      backgroundColor: "rgba(224, 226, 255, 0.5)",
      color: "#2a2135",
    },
    star: {
      borderLeft: "4px solid #ff7828",
      backgroundColor: "rgb(253, 236, 234)",
    },
    moon: {
      borderLeft: "4px solid #72bc23",
      backgroundColor: "rgb(249, 253, 234)",
    },
    sun: {
      borderLeft: "4px solid #44a9ba",
      backgroundColor: "rgb(234, 248, 253);",
    },
  }
  return (
    <aside
      style={{
        margin: "1.5rem auto",
        borderRadius: "0px 10px 10px 0px",
        padding: "0.8em 1em",
        lineHeight: "1.2",
        textAlign: "center",
        position: "relative",
        clear: "both",
        color: "black",
        ...variantStyles[variant],
      }}
      className={classes}
    >
      {children}
    </aside>
  )
}
