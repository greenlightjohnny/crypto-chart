import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Chart from "../components/Chart"
import Details from "../components/Details"
import Styles from "../styles/coininfo.module.scss"
import gecko from "../apis/gecko"

function CoinInfo() {
  const { name } = useParams()
  const [coinData, setCoinData] = useState({})
  const [time, setTime] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const howMany = time | "3"
  console.log(howMany)
  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      let days
      let main
      try {
        ;[days, main] = await Promise.all([
          gecko.get(`/coins/${name}/market_chart`, {
            params: {
              vs_currency: "usd",
              days: { howMany },
            },
          }),
          gecko.get(`/coins/markets/`, {
            params: {
              vs_currency: "usd",
              ids: name,
            },
          }),
        ])
        console.log(days, main)
        setCoinData({
          days: days.data.prices,
          main: main.data[0],
        })
        console.log(coinData)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const renderData = () => {
    if (isLoading) {
      return (
        <div className={Styles.main}>
          <div className={Styles.container}>Spinner needed</div>
        </div>
      )
    } else {
      return (
        <div>
          <div className={Styles.container}>
            <Chart />
            <Details />
          </div>
        </div>
      )
    }
  }
  return renderData()
}

export default CoinInfo
