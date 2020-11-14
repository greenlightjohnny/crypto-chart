import React from "react"
import Styles from "../styles/details.module.scss"
import DetailsMap from "./DetailsMap"
const Details = ({ data }) => {
  const renderPrice = () => {
    let colors = ""

    if (data.mainInfo) {
      if (data.mainInfo.price_change_percentage_24h > 0) {
        colors = { color: "green" }
      } else {
        colors = { color: "red" }
      }

      return (
        <>
          <span style={colors}>${data.mainInfo.price_change_24h}</span>
        </>
      )
    }
  }

  const renderData = () => {
    //console.log(data.mainInfo)
    if (data.mainInfo) {
      return (
        <>
          <DetailsMap data={data.mainInfo} />
          {/* <div className={Styles.main}>
          <div className={Styles.header}>
            <img src={data.mainInfo.image} alt={data.mainInfo.name} />
            <h4>{data.mainInfo.name}</h4>
          </div>
          <div className={Styles.flex}>
            <div className={Styles.flexItem}>
              <span className={Styles.market}>Market Cap</span>
              <span>{data.mainInfo.market_cap}</span>
            </div>
            <div className={Styles.flexItem}>
              <span className={Styles.market}>All Time High</span>
              <span>{data.mainInfo.ath}</span>
            </div>
            <div className={Styles.flexItem}>
              <span className={Styles.market}>All Time Low</span>
              <span>{data.mainInfo.atl}</span>
            </div>
            <div className={Styles.flexItem}>
              <span className={Styles.market}>24H Low:</span>
              <span>{data.mainInfo.low_24h}</span>
            </div>
            <div className={Styles.flexItem}>
              <span className={Styles.market}>24H High:</span>
              <span>{data.mainInfo.high_24h}</span>
            </div>
            <div className={Styles.flexItem}>
              <span className={Styles.market}>24H Change:</span>
              {renderPrice()}
            </div>
            <div className={Styles.flexItem}>
              <span className={Styles.market}>Total Supply:</span>
              <span>{data.mainInfo.total_supply}</span>
            </div>
          </div>
        </div> */}
        </>
      )
    } else {
      return <p>Hello</p>
    }
  }

  return <>{renderData()}</>
}

export default Details
