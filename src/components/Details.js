import React from "react"
import Styles from "../styles/details.module.scss"
const Details = ({ data }) => {
  const renderData = () => {
    console.log(data)
    if (data) {
      return (
        <div className={Styles.main}>
          <div className={Styles.flex}>
            <div className={Styles.flexItem}>
              <span className={Styles.market}>Market Cap</span>
              <span>{data.mainInfo.market_cap}</span>
            </div>
            <div className={Styles.flexItem}>
              <span className={Styles.market}>Market Cap</span>
              <span>{data.mainInfo.market_cap}</span>
            </div>
            <div className={Styles.flexItem}>
              <span className={Styles.market}>Market Cap</span>
              <span>{data.mainInfo.market_cap}</span>
            </div>
            <div className={Styles.flexItem}>
              <span className={Styles.market}>Market Cap</span>
              <span>{data.mainInfo.market_cap}</span>
            </div>
          </div>
        </div>
      )
    }
  }

  return <>{renderData()}</>
}

export default Details
