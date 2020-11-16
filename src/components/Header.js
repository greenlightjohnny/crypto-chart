import React from "react"
import { Link } from "react-router-dom"
import Styles from "../styles/header.module.scss"
import Logo from "../images/ablogo.svg"
import AuthSwitch from "./AuthSwitch"
const Header = () => {
  return (
    <div className={Styles.main}>
      <nav className={Styles.container}>
        <Link to="/">
          <div className={Styles.logocon}>
            <img src={Logo} alt="Abstract logo" />
          </div>
        </Link>
        <AuthSwitch />
      </nav>
    </div>
  )
}

export default Header
