import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"
//import UserContext from "../../context/UserContext";
import { CurrencyContext } from "../context/currencyContext"
import Logo2 from "../images/weasel.png"
import Styles from "../styles/authswitch.module.scss"

const AuthOptions = (props) => {
  const authContext = useContext(CurrencyContext)
  const history = useHistory()

  const register = () => {
    history.push("/register")
  }
  const login = () => {
    history.push("/login")
  }

  const logout = async () => {
    const confirmURL = "/api/v1/users/logout"
    const loginRes = await axios.post(confirmURL, {}, { withCredentials: true })
    console.log(loginRes)
    history.push("/")
    authContext.setIsAuthenticated(false)
  }

  return (
    <>
      {authContext.isAuthenticated ? (
        <div className={Styles.auth}>
          <Link to="/secrets">Secret</Link>
          <button onClick={logout}>Log Out</button>
          <Link to="/user" alt="control panel">
            <img className={Styles.btn} src={Logo2} alt="test" />
          </Link>
        </div>
      ) : (
        <div className={Styles.auth}>
          <Link to="/data">Data</Link>
          <Link to="/landing">About</Link>
          <button onClick={register}>Register</button>
          <button onClick={login}>Login</button>{" "}
        </div>
      )}
    </>
  )
}

export default AuthOptions
