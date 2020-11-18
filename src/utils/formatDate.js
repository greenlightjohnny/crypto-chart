import React from "react"
import dayjs from "dayjs"
import NumberFormat from "react-number-format"
import Abbreviate from "number-abbreviate"
export const shortenDate = (checkMe, data) => {
  let numAbbr = new Abbreviate(["k", "m", "b", "t"])
  //console.log(data)
  if (checkMe === "ath_date" || checkMe === "atl_date") {
    let oldDate = data[checkMe]
    let newDate = dayjs(oldDate).format("MM/DD/YY")
    return <span>{newDate}</span>
  } else if (
    checkMe === "price_change_24h" ||
    checkMe === "price_change_percentage_24h"
  ) {
    let oldDate2 = data[checkMe]
    if (data[checkMe] > 0) {
      let isC
      if (checkMe === "price_change_24h") {
        isC = data.currency
      }
      return (
        <span style={{ color: "green" }}>
          {checkMe > 100000
            ? numAbbr.abbreviate([oldDate2], [2])
            : new Intl.NumberFormat().format(oldDate2)}
        </span>
      )
    } else {
      return <span style={{ color: "red" }}>{oldDate2}</span>
    }
  } else {
    //console.log(data)
    let data3 = data[checkMe]
    if (!isNaN(data3)) {
      return (
        <span style={{ color: "#fff" }}>
          {" "}
          {data3 > 100000
            ? numAbbr.abbreviate([data3], [2])
            : new Intl.NumberFormat().format(data3)}
        </span>
      )
    } else {
      return <span style={{ color: "#fff" }}> {data3}</span>
    }
  }
}

export const lastUpdate = (tas) => {
  const newD = dayjs(tas).format("DD, hh:ss")
  return newD
}
