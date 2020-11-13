import React from "react"
import Styles from "../styles/button.module.scss"

const Button = ({ color, text, goto }) => {
  return <button className={Styles.button}>{text}</button>
}

export default Button
