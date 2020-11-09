import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import Chart from "../components/Chart"
import Details from "../components/Details"
import Styles from "../styles/coininfo.module.scss"
import gecko from "../apis/gecko"

function CoinInfo() {
  const { name } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gecko.get(`/coins/${name}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        })
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const renderData = () => {
    return (
      <div>
        <div className={Styles.container}>
          <Chart />
          <Details />
        </div>
      </div>
    )
  }
  return renderData()
}

export default CoinInfo
