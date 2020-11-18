import React, { createContext, useEffect, useState } from "react"

export const CoinContext = createContext()

export const CoinContextProvider = (props) => {
  const [coinCurrent, setCoinCurrent] = useState({ currentCoin: false })
  const [coinCurrency, setCoinCurrency] = useState("eur")
  const [widgetMap, setWidgetMap] = useState([
    {
      title: "Overview",
      widge: [
        { name: "Coin", value: "name" },
        { name: "Symbol", value: "symbol" },
        { name: "Price", value: "current_price" },
        { name: "24H", value: "price_change_24h" },
        { name: "24H", value: "price_change_percentage_24h" },
      ],
    },
    {
      title: "Overview",
      widge: [
        { name: "Total:", value: "total_supply" },
        { name: "Volume:", value: "total_volume" },
        { name: "MCR:", value: "market_cap_rank" },
        { name: "Circulating", value: "circulating_supply" },
        { name: "MC", value: "market_cap" },
      ],
    },
    {
      title: "All Time",
      widge: [
        { name: "ATH:", value: "ath" },
        { name: "ATHD:", value: "ath_date" },
        { name: "ATL:", value: "atl" },
        { name: "ATLD:", value: "atl_date" },
        { name: "24H L:", value: "low_24h" },
        { name: "24H H:", value: "high_24h" },
      ],
    },
    {
      title: "Holdings",
      widge: [
        { name: "ATH:", value: "ath" },
        { name: "ATHD:", value: "ath_date" },
        { name: "ATL:", value: "atl" },
        { name: "ATLD:", value: "atl_date" },
        { name: "24H L:", value: "low_24h" },
        { name: "24H H:", value: "high_24h" },
      ],
    },
    {
      title: "Compare",
      widge: [
        { name: "ATH:", value: "ath" },
        { name: "ATHD:", value: "ath_date" },
        { name: "ATL:", value: "atl" },
        { name: "ATLD:", value: "atl_date" },
        { name: "24H L:", value: "low_24h" },
        { name: "24H H:", value: "high_24h" },
      ],
    },
  ])

  return (
    <CoinContext.Provider
      value={{
        coinCurrent,
        setCoinCurrent,
        widgetMap,
        setWidgetMap,
        coinCurrency,
      }}
    >
      {props.children}
    </CoinContext.Provider>
  )
}
