import React, { useEffect, useState } from "react"
import axios from "axios"

function List() {
  const [coins, setCoins] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reply = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20monero&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        console.log(reply.data)
      } catch (err) {}
    }
    fetchData()
  }, [])
  return <div></div>
}

export default List
