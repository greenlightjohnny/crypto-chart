import React from "react"
import Styles from "../styles/footer.module.scss"
import { Link } from "react-router-dom"
import Weasel from "../images/weasel.png"
function Footer() {
  return (
    <footer>
      <div className={Styles.flex}>
        <div className={Styles.flexItem}>
          <div className={Styles.weasel}>
            <img src={Weasel} alt="Outline of a cute weasel" />
          </div>
        </div>
        <div className={Styles.flexItem}>
          <p>Main</p>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Data</Link>
        </div>
        <div className={Styles.flexItem}>
          <p>User</p>
          <Link to="/">Login</Link>
          <Link to="/">Register</Link>
          <Link to="/">Profile</Link>
        </div>
        <div className={Styles.flexItem}>
          <p>About</p>
          <Link to="/">Contact</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">Data</Link>
        </div>
      </div>
      <p>
        Powered by <a href="https://www.coingecko.com/en/api">CoinGecko</a> API
      </p>
    </footer>
  )
}

export default Footer
