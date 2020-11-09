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

  const chartFormat = (data) => {
    return data.map((i) => {
      return {
        t: i[0],
        y: i[1].toFixed(2),
      }
    })
  }

  const howMany = time | 9
  console.log(howMany)
  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      let days
      let mainInfo
      try {
        ;[days, mainInfo] = await Promise.all([
          gecko.get(`/coins/${name}/market_chart`, {
            params: {
              vs_currency: "usd",
              days: howMany,
            },
          }),
          gecko.get(`/coins/markets/`, {
            params: {
              vs_currency: "usd",
              ids: name,
            },
          }),
        ])
        console.log(mainInfo)
        setCoinData({
          days: chartFormat(days.data.prices),
          mainInfo: mainInfo.data[0],
        })
        //console.log(coinData)
        setIsLoading(false)
        console.log(coinData.main)
      } catch (error) {
        //console.log(error)
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
            <Chart chartData={coinData} />
            <Details />
          </div>
        </div>
      )
    }
  }
  return renderData()
}

export default CoinInfo
