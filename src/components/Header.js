import React from "react"
import { Link } from "react-router-dom"
import Styles from "../styles/header.module.scss"
import Logo from "../images/ablogo.svg"
import AuthSwitch from "./AuthSwitch"
import Switch from "../utils/Switch"
const Header = () => {
  return (
    <div className={Styles.main}>
      <nav className={Styles.container}>
        <Link to="/">
          <div className={Styles.logocon}>
            <img src={Logo} alt="Abstract logo" />
          </div>
        </Link>
        <Switch />
        <AuthSwitch />
      </nav>
    </div>
  )
}

export default Header
