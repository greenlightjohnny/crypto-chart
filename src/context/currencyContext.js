import React, { createContext, useState } from "react"

export const CurrencyContext = createContext()

export const CurrencyContextProvider = (props) => {
  const [coinList, setCoinList] = useState([
    "bitcoin",
    "hex",
    "ethereum",
    "litecoin",
    "dash",
  ])
  const [line, setLine] = useState({
    linePlus: "blue",
    lineNeg: "red",
  })
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

  const handleLine = (name, color) => {
    console.log(name)
    if (name === "lineNeg") {
      setLine({ ...line, lineNeg: color })
    }
  }

  return (
    <CurrencyContext.Provider
      value={{
        line,
        setLine,
        handleLine,
        coinList,
        deleteCoin,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {props.children}
    </CurrencyContext.Provider>
  )
}
