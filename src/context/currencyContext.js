import React, { createContext, useEffect, useState } from "react"

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
  const [userSettings, setUserSettings] = useState({
    lineInfo: {
      colorPositive: "green",
      colorNegative: "yellow",
    },
    currencyInfo: {
      display: true,
      colorPositive: "orange",
      colorNegative: "blue",
    },
  })

  //cool red #de1f1f
  // bluish #194d21
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const deleteCoin = (coin) => {
    //console.log(coin)
    const newList = [...coinList]
    //console.log(newList)
    let filterMe = newList.filter((item) => {
      return item !== coin
    })
    //console.log(filterMe)
    setCoinList(filterMe)
  }

  const handleLine = (name, color) => {
    //console.log(name)
    if (name === "lineNeg") {
      setLine({ ...line, lineNeg: color })
    }
  }

  const handleUserSettings = (userObject) => {
    console.log(userObject)
    setStoredSettings(userObject)
  }

  const [storedSettings, setStoredSettings] = useState(
    JSON.parse(window.localStorage.getItem("userAll")) || userSettings
  )

  //console.log(storedSettings)

  useEffect(() => {
    localStorage.setItem("userAll", JSON.stringify(storedSettings))
  }, [storedSettings])
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
        userSettings,
        setUserSettings,
        storedSettings,
        handleUserSettings,
      }}
    >
      {props.children}
    </CurrencyContext.Provider>
  )
}
