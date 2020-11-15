import React from "react"
import Styles from "../styles/button.module.scss"

const Button = ({ mycolor, handleIt, textColor, text, goto }) => {
  return (
    <button
      style={{ background: mycolor, color: textColor || "inherit" }}
      className={Styles.button}
      onClick={handleIt}
    >
      {text}
    </button>
  )
}

export default Button
