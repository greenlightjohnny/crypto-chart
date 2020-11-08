import React from "react"
import Styles from "../styles/listmap.module.scss"
function ListMap({ coins }) {
  return (
    <div className={Styles.main}>
      {coins.map((coin) => {
        return <div key={coin.id}>{coin.id}</div>
      })}
    </div>
  )
}

export default ListMap
