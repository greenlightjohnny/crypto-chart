import React, { createContext, useState } from "react"

export const CurrencyContext = createContext()

export const CurrencyContextProvider = (props) => {
  const [coinList, setCoinList] = useState([
    "bitcoin",
    "dogecoin",
    "ethereum",
    "litecoin",
  ])

  return (
    <CurrencyContext.Provider value={{ coinList }}>
      {props.children}
    </CurrencyContext.Provider>
  )
}
