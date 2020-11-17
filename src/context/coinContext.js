import React, { createContext, useEffect, useState } from "react"

export const CoinContext = createContext()

export const CoinContextProvider = (props) => {
  const [coinCurrent, setCoinCurrent] = useState("Good morning")
  const [widgetMap, setWidgetMap] = useState([
    {
      overview: [
        "Overview",
        { name: "Coin", value: "name" },
        { name: "Price", value: "current_price" },
      ],
    },
    {
      market: [
        "Market",
        { name: "Total Supply:", value: "total_supply" },
        { name: "Total Volume:", value: "total_volume" },
        { name: "Market Cap Rank:", value: "market_cap_rank" },
        { name: "Circulating Supply:", value: "circulating_supply" },
      ],
    },
    {
      alltime: [
        "All Time",
        { name: "All Time High:", value: "ath" },
        { name: "ATH Date:", value: "ath_date" },
        { name: "All Time Low:", value: "atl" },
        { name: "ATL Date:", value: "atl_date" },
        { name: "24H Low:", value: "low_24h" },
        { name: "24H High:", value: "high_24h" },
      ],
    },
    {
      alltime: [
        "All2",
        { name: "All Time High:", value: "ath" },
        { name: "ATH Date:", value: "ath_date" },
        { name: "All Time Low:", value: "atl" },
        { name: "ATL Date:", value: "atl_date" },
        { name: "24H Low:", value: "low_24h" },
        { name: "24H High:", value: "high_24h" },
      ],
    },
    {
      alltime: [
        "All3",
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
      }}
    >
      {props.children}
    </CoinContext.Provider>
  )
}
