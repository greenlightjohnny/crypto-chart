import React from "react"
import Styles from "../styles/button.module.scss"

const Button = ({ mycolor, textColor, text, goto }) => {
  return (
    <button
      style={{ background: mycolor, color: textColor || "inherit" }}
      className={Styles.button}
    >
      {text}
    </button>
  )
}

export default Button
