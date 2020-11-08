import React, { createContext, useState } from "react"

export const CurrencyContext = createContext()

export const CurrencyContextProvider = (props) => {
  const [coinList, setCoinList] = useState([
    "bitcoin",
    "hex",
    "ethereum",
    "litecoin",
  ])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

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
    <CurrencyContext.Provider
      value={{ coinList, deleteCoin, isAuthenticated, setIsAuthenticated }}
    >
      {props.children}
    </CurrencyContext.Provider>
  )
}
