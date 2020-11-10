import React, { useState } from "react"
import Styles from "../styles/details.module.scss"

function DetailsMap({ data }) {
  const [list, setList] = useState([
    { name: "Market Cap", value: "market_cap" },
    { name: "All Time High", value: "ath" },
    { name: "Market Cap2", value: "market_cap" },
    { name: "Market Cap3", value: "market_cap" },
    { name: "Market Cap4", value: "market_cap" },
  ])
  const doWeHaveData = data
  console.log(data.ath)
  const test = list[1].value
  console.log(test)
  console.log(`${data[test]}`)
  return (
    <>
      {doWeHaveData ? (
        <div className={Styles.main}>
          <div className={Styles.header}>
            <img src={data.image} alt={data.name} />
            <h4>{data.name}</h4>
          </div>
          <div className={Styles.flex}>
            {list.map((item) => {
              return (
                <div key={item.name} className={Styles.flexItem}>
                  <span className={Styles.market}>{item.name}</span>
                  <span>{`${data[item.value]}`}</span>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default DetailsMap

// //<div className={Styles.flexItem}>
// <span className={Styles.market}>Market Cap</span>
// <span>{data.mainInfo.market_cap}</span>
// </div>
// <div className={Styles.flexItem}>
// <span className={Styles.market}>All Time High</span>
// <span>{data.mainInfo.ath}</span>
// </div>
// <div className={Styles.flexItem}>
// <span className={Styles.market}>All Time Low</span>
// <span>{data.mainInfo.atl}</span>
// </div>
// <div className={Styles.flexItem}>
// <span className={Styles.market}>24H Low:</span>
// <span>{data.mainInfo.low_24h}</span>
// </div>
// <div className={Styles.flexItem}>
// <span className={Styles.market}>24H High:</span>
// <span>{data.mainInfo.high_24h}</span>
// </div>
// <div className={Styles.flexItem}>
// <span className={Styles.market}>24H Change:</span>
// {renderPrice()}
// </div>
// <div className={Styles.flexItem}>
// <span className={Styles.market}>Total Supply:</span>
// <span>{data.mainInfo.total_supply}</span>
// </div>
