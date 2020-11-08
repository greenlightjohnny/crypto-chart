import React, { useEffect, useState, useContext } from "react"
import ListMap from "./ListMap"
import geckoapi from "../apis/gecko"
import { CurrencyContext } from "../context/currencyContext"

function List() {
  const [coins, setCoins] = useState()
  const { coinList, deleteCoin } = useContext(CurrencyContext)
  const [isLoading, setIsLoading] = useState(false)
  //console.log(coinList)
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
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
        setCoins(reply.data)
      } catch (err) {
        console.log(err)
        //setIsLoading(false)
      }
    }
    fetchData()
  }, [coinList])
  return (
    <div>
      <ListMap coins={coins} deleteCoin={deleteCoin} isLoading={isLoading} />
    </div>
  )
}

export default List
