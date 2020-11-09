import React from "react"
import Styles from "../styles/footer.module.scss"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <div className={Styles.flex}>
        <div className={Styles.flexItem}>Logo</div>
        <div className={Styles.flexItem}>
          <p>Link</p>
          <Link to="/">Test Link</Link>
          <Link to="/">Test Link</Link>
          <Link to="/">Test Link</Link>
        </div>
        <div className={Styles.flexItem}>
          <p>Link</p>
          <Link to="/">Test Link</Link>
          <Link to="/">Test Link</Link>
          <Link to="/">Test Link</Link>
        </div>
        <div className={Styles.flexItem}>
          <p>Link</p>
          <Link to="/">Test Link</Link>
          <Link to="/">Test Link</Link>
          <Link to="/">Test Link</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
