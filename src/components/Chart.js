import React, { useRef, useEffect, useState } from "react"
import ChartJS from "chart.js"
import Styles from "../styles/chart.module.scss"
import { historyOptions } from "../chartconfig/chartconfig"
const Chart = ({ chartData }) => {
  const chartRef = useRef()
  const { days, mainInfo } = chartData
  const { daysLength, setDaysLength } = useState("24")
  //console.log(main.name)
  //let coinName = main.name || "coin"
  //console.log(coinName)
  // let gradient = chartRef.createLinearGradient(0, 0, 0, 400)
  // gradient.addColorStop(0, "rgba(250,174,50,1)")
  // gradient.addColorStop(1, "rgba(250,174,50,0)")

  //console.log(mainInfo)

  let coinName
  let timeFrame
  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartData.mainInfo !== undefined) {
        coinName = mainInfo.name
      } else {
        coinName = "coin"
      }
      const chartInstance = new ChartJS(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${coinName} price`,
              data: days,
              //backgroundColor: gradient,
              backgroundColor: "#e66465",
              borderColor: "rgb(25, 233, 95)",
              pointRadius: 0,
            },
          ],
        },
        options: { ...historyOptions },
      })
    }
  }, [chartData])

  const renderPrice = () => {
    let colors = ""

    if (mainInfo) {
      if (mainInfo.price_change_percentage_24h > 0) {
        colors = { color: "green" }
      } else {
        colors = { color: "red" }
      }
      ;``
      return (
        <>
          <p className={Styles.price}>
            Current Price: ${mainInfo.current_price}
          </p>
          <p style={colors}>24H change: ${mainInfo.price_change_24h}</p>
        </>
      )
    }
  }
  return (
    <div className={Styles.wrapper}>
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250} />
      </div>
    </div>
  )
}

export default Chart
