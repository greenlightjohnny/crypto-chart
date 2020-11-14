import React from "react"
import dayjs from "dayjs"

export const shortenDate = (checkMe, data) => {
  //console.log(data)
  if (checkMe === "ath_date" || checkMe === "atl_date") {
    let oldDate = data[checkMe]
    let newDate = dayjs(oldDate).format("MMM D, YYYY")
    return <span>{newDate}</span>
  } else {
    return <span>{`${data[checkMe]}`}</span>
  }
}

export const lastUpdate = (tas) => {
  const newD = dayjs(tas).format("DD, hh:ss")
  return newD
}
