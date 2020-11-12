import React, { useEffect, useState, useContext } from "react"

import geckoapi from "../apis/gecko"
import { CurrencyContext } from "../context/currencyContext"
import Two from "./Boring"
import Styles from "../styles/boring.module.scss"

const TableData = () => {
  const [coins, setCoins] = useState()
  const { coinList, deleteCoin } = useContext(CurrencyContext)
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
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
        setCoins(reply.data)
      } catch (err) {
        console.log(err)
        //setIsLoading(false)
      }
    }
    if (coinList.length > 0) {
      fetchData()
    } else {
      setCoins([])
    }
  }, [coinList])

  return (
    <div className={Styles.container}>
      {!coins ? <p>Hello</p> : <Two coins={coins} />}
    </div>
  )
}

export default TableData
