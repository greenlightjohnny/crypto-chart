import React, { useRef, useEffect, useState } from "react"
import ChartJS from "chart.js"
import Styles from "../styles/chart.module.scss"
import { historyOptions } from "../chartconfig/chartconfig"
const Chart = ({ chartData, handleTime, time }) => {
  const chartRef = useRef()
  const { days, mainInfo } = chartData
  const { daysLength, setDaysLength } = useState("24")
  const [buttonList, setButtonList] = useState([
    { time: 1, text: "1D" },
    { time: 7, text: "1W" },
    { time: 30, text: "1M" },
    { time: 180, text: "6M" },
    { time: 365, text: "1Y" },
  ])

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
      <div className={Styles.chartSize}>
        <canvas ref={chartRef} id="myChart" height={400} width={600} />
      </div>
      <div className={Styles.setDays}>
        {buttonList.map((i) => {
          return (
            <button
              key={i.time}
              className={time === i.time ? Styles.active : ""}
              onClick={() => handleTime(i.time)}
            >
              {i.text}
            </button>
          )
        })}
        {/* <button onClick={() => handleTime(1)}>24H</button>
        <button onClick={() => handleTime(7)}>1W</button>
        <button onClick={() => handleTime(30)}>1M</button>
        <button onClick={() => handleTime(180)}>6M</button>
        <button onClick={() => handleTime(365)}>1Y</button> */}
      </div>
    </div>
  )
}

export default Chart
