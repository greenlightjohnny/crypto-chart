import React from "react"
import Styles from "../styles/button.module.scss"
import { Link } from "react-router-dom"

const AnchorButton = ({ color, text, mycolor, goto }) => {
  return (
    <Link
      to={goto}
      alt={text}
      style={{ background: mycolor }}
      className={Styles.buttonA}
    >
      {text}
    </Link>
  )
}

export default AnchorButton
