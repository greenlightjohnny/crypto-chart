import React, { useState } from "react"
import Styles from "../styles/details.module.scss"
import moment from "moment"
import dayjs from "dayjs"
import { shortenDate, lastUpdate } from "../utils/formatDate"

function DetailsMap({ data }) {
  const [list, setList] = useState([
    { name: "Market Cap:", value: "market_cap" },
    { name: "All Time High:", value: "ath" },
    { name: "ATH Date:", value: "ath_date" },
    { name: "All Time Low:", value: "atl" },
    { name: "ATL Date:", value: "atl_date" },
    { name: "24H Low:", value: "low_24h" },
    { name: "24H High:", value: "high_24h" },

    { name: "Total Supply:", value: "total_supply" },
    { name: "Total Volume:", value: "total_volume" },
    { name: "Market Cap Rank:", value: "market_cap_rank" },
    { name: "Circulating Supply:", value: "circulating_supply" },
  ])
  const doWeHaveData = data

  const test = list[1].value
  //console.log(test)
  //console.log(`${data[test]}`)

  const dstring = data.ath_date
  //console.log(dstring)
  const again = dayjs(dstring).format("MMM D, YYYY")
  //console.log(again)

  const renderPrice = (tar) => {
    let colors = ""

    if (data) {
      if (data[tar] > 0) {
        colors = { color: "green" }
      } else {
        colors = { color: "red" }
      }

      return (
        <>
          <span style={colors}>{`$ ${data[tar]}`}</span>
        </>
      )
    }
  }

  // const formatUpdate = (tas) => {
  //   const newD = dayjs(tas).format("DD, hh:ss")
  //   return newD
  // }

  // const formatDate = (checkMe) => {
  //   if (checkMe === "ath_date" || checkMe === "atl_date") {
  //     let oldDate = data[checkMe]
  //     let newDate = dayjs(oldDate).format("MMM D, YYYY")
  //     return <span>{newDate}</span>
  //   } else {
  //     return <span>{`${data[checkMe]}`}</span>
  //   }
  // }
  return (
    <>
      {doWeHaveData ? (
        <div className={Styles.main}>
          <div className={Styles.header}>
            <img src={data.image} alt={data.name} />
            <h4>{data.name}</h4>
            <p>
              Last Updated:{" "}
              <span className={Styles.spanNumber}>
                {lastUpdate(data.last_updated)}
              </span>
            </p>
          </div>
          <div className={Styles.flex}>
            {list.map((item) => {
              return (
                <div key={item.name} className={Styles.flexItem}>
                  <span className={Styles.market}>{item.name}</span>
                  {shortenDate(item.value, data)}
                  {/* <span>{`${data[item.value]}`}</span> */}
                </div>
              )
            })}
            <div className={Styles.flexItem}>
              <span className={Styles.market}>24H Change:</span>
              {renderPrice("price_change_24h")}
            </div>
            <div className={Styles.flexItem}>
              <span className={Styles.market}>24H % Change:</span>
              {renderPrice("price_change_percentage_24h")}
            </div>
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
