import React from "react"
import Coin from "../components/Pick"
import List from "../components/List"
import Styles from "../styles/home.module.scss"
import HomeXT from "../components/homext"
import TableData from "../components/Table"
import Title from "../components/homecomponents/Title"
import Info from "../components/homecomponents/Info"
const summary = () => {
  return (
    <>
      <div className={Styles.home}>
        {/* <List /> */}
        <Title />
        <TableData />
        <Info />
      </div>
      <HomeXT />
    </>
  )
}

export default summary
