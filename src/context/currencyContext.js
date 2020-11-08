import React, { createContext, useState } from "react"

export const CurrencyContext = createContext()

export const CurrencyContextProvider = (props) => {
  const [coinList, setCoinList] = useState([
    "bitcoin",
    "hex",
    "ethereum",
    "litecoin",
  ])
  const deleteCoin = (coin) => {
    console.log(coin)
    const newList = [...coinList]
    console.log(newList)
    let filterMe = newList.filter((item) => {
      return item !== coin
    })
    console.log(filterMe)
    setCoinList(filterMe)
  }

  return (
    <CurrencyContext.Provider value={{ coinList, deleteCoin }}>
      {props.children}
    </CurrencyContext.Provider>
  )
}
