import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import Chart from "../components/Chart"
import Details from "../components/Details"
import Styles from "../styles/coininfo.module.scss"
import gecko from "../apis/gecko"
import { CoinContext } from "../context/coinContext"
import NewGrid from "../components/newgrid/NewGrid"
function CoinInfo() {
  const { name } = useParams()
  const [coinData, setCoinData] = useState({})
  const [time, setTime] = useState(1)
  const [text, setText] = useState("1D")
  const [isLoading, setIsLoading] = useState(false)
  const { coinCurrent, setCoinCurrent, coinCurrency } = useContext(CoinContext)

  const chartFormat = (data) => {
    return data.map((i) => {
      return {
        t: i[0],
        y: i[1].toFixed(2),
      }
    })
  }

  const handleTime = (e) => {
    //console.log(e)
    setTime(e.time)
    setText(e.text)
  }

  const howMany = time | 9
  //console.log(time)
  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      let days
      let mainInfo
      console.log(coinCurrency)
      try {
        ;[days, mainInfo] = await Promise.all([
          gecko.get(`/coins/${name}/market_chart`, {
            params: {
              vs_currency: coinCurrency,
              days: time,
            },
          }),
          gecko.get(`/coins/markets/`, {
            params: {
              vs_currency: coinCurrency,
              ids: name,
            },
          }),
        ])
        //console.log(mainInfo)
        setCoinCurrent({
          days: chartFormat(days.data.prices),
          mainInfo: mainInfo.data[0],
        })
        setCoinData({
          days: chartFormat(days.data.prices),
          mainInfo: mainInfo.data[0],
        })
        //console.log(coinData)
        setIsLoading(false)
        //console.log(coinData.main)
      } catch (error) {
        //console.log(error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [time])

  const renderData = () => {
    if (isLoading) {
      return (
        <div className={Styles.main}>
          <div className={Styles.container}>Spinner needed</div>
        </div>
      )
    } else {
      return (
        <div className={Styles.main}>
          <div className={Styles.container}>
            <Chart
              chartData={coinData}
              time={time}
              text={text}
              handleTime={handleTime}
            />
            {/* <Details data={coinData} /> */}
            <NewGrid />
          </div>
        </div>
      )
    }
  }
  return renderData()
}

export default CoinInfo
