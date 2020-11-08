import React, { useEffect, useState, useContext } from "react"
import ListMap from "./ListMap"
import geckoapi from "../apis/gecko"
import { CurrencyContext } from "../context/currencyContext"

function List() {
  const [coins, setCoins] = useState()
  const { coinList } = useContext(CurrencyContext)
  const [isLoading, setIsLoading] = useState(false)
  console.log(coinList)
  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const reply = await geckoapi.get("/coins/markets", {
          params: {
            vs_currency: "usd",
            ids: coinList.join(","),
          },
        })

        console.log(reply.data)
        setCoins(reply.data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      {coins ? <ListMap coins={coins} /> : <p>Select a coin to check price </p>}
    </div>
  )
}

export default List
