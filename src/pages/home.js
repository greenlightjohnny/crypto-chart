import React from "react"
import Coin from "../components/Pick"
import List from "../components/List"
import Styles from "../styles/home.module.scss"
import HomeXT from "../components/homext"
const summary = () => {
  return (
    <>
      <div className={Styles.home}>
        <List />
      </div>
      <HomeXT />
    </>
  )
}

export default summary
