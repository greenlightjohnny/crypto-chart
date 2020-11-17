import React, { createContext, useEffect, useState } from "react"

export const CoinContext = createContext()

export const CoinContextProvider = (props) => {
  const [coinCurrent, setCoinCurrent] = useState({ currentCoin: false })
  const [widgetMap, setWidgetMap] = useState([
    {
      title: "Overview",
      widge: [
        { name: "Coin", value: "name" },
        { name: "Price", value: "current_price" },
      ],
    },
    {
      title: "Overview",
      widge: [
        { name: "Total Supply:", value: "total_supply" },
        { name: "Total Volume:", value: "total_volume" },
        { name: "Market Cap Rank:", value: "market_cap_rank" },
        { name: "Circulating Supply:", value: "circulating_supply" },
      ],
    },
    {
      title: "All Time",
      widge: [
        { name: "All Time High:", value: "ath" },
        { name: "ATH Date:", value: "ath_date" },
        { name: "All Time Low:", value: "atl" },
        { name: "ATL Date:", value: "atl_date" },
        { name: "24H Low:", value: "low_24h" },
        { name: "24H High:", value: "high_24h" },
      ],
    },
    {
      title: "All2",
      widge: [
        { name: "All Time High:", value: "ath" },
        { name: "ATH Date:", value: "ath_date" },
        { name: "All Time Low:", value: "atl" },
        { name: "ATL Date:", value: "atl_date" },
        { name: "24H Low:", value: "low_24h" },
        { name: "24H High:", value: "high_24h" },
      ],
    },
    {
      title: "All3",
      widge: [
        { name: "All Time High:", value: "ath" },
        { name: "ATH Date:", value: "ath_date" },
        { name: "All Time Low:", value: "atl" },
        { name: "ATL Date:", value: "atl_date" },
        { name: "24H Low:", value: "low_24h" },
        { name: "24H High:", value: "high_24h" },
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
      }}
    >
      {props.children}
    </CoinContext.Provider>
  )
}
