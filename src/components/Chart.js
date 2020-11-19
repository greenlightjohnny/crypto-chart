import React, { useRef, useEffect, useState, useContext } from "react"
import ChartJS from "chart.js"
import Styles from "../styles/chart.module.scss"
import { historyOptions } from "../chartconfig/chartconfig"
import { CurrencyContext } from "../context/currencyContext"
import DownloadComponent from "./chartcomponents/downloadComponents/DownloadComponent"
import { SendMe } from "../chartconfig/chartconfig"

import GetDays from "./chartcomponents/getDays"

const Chart = ({ chartData, handleTime, time, text }) => {
  const chartRef = useRef()
  const { line, userSettings, storedSettings } = useContext(CurrencyContext)
  const { days, mainInfo } = chartData

  const [isOpen, setIsOpen] = useState(false)
  const [isDownload, setIsDownload] = useState(false)
  const [priceNow, setPriceNow] = useState("")

  let priceDifference

  let coinName
  let timeFrame
  let pChange
  let gradient
  let gradient2
  let coinPrice
  // let cOptions = {

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d")
      gradient = ctx.createLinearGradient(0, 0, 0, 1550)
      gradient2 = ctx.createLinearGradient(0, 0, 0, 1550)

      gradient.addColorStop(0, "rgba(255, 0,0, 0.6)")
      gradient.addColorStop(0.4, "rgba(255, 0, 0, 0.4)")
      gradient.addColorStop(1, "rgba(255, 0, 0, 0)")

      gradient2.addColorStop(0, "rgba(0, 255, 34, 0.6)")
      gradient2.addColorStop(0.2, "rgba(0, 255, 34, 0.4)")
      gradient2.addColorStop(1, "rgba(0, 255, 34, 0)")
      if (chartData.mainInfo !== undefined) {
        coinName = mainInfo.name
        coinPrice = chartData.mainInfo.current_price
        pChange = mainInfo.price_change_24h
        const oldPrice = chartData.days[0].y
        const currentPrice = chartData.mainInfo.current_price
        priceDifference = currentPrice - oldPrice
        setPriceNow(priceDifference)
      } else {
        coinName = "coin"
      }

      const chartInstance = new ChartJS(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              // label: `${coinName} price`,
              // fontSize: 20,
              // fontColor: "#000",
              data: days,

              //backgroundColor: gradient,
              backgroundColor: pChange < 0 ? gradient : gradient2,
              borderColor:
                priceDifference < 0
                  ? storedSettings.lineInfo.colorNegative
                  : storedSettings.lineInfo.colorPositive,
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...SendMe(coinName, "#000", coinPrice),
        },
      })
      // const ctx = chartRef.current.getContext("2d")
      // gradient = ctx.createLinearGradient(0, 0, 0, 450)
      // gradient.addColorStop(0, "rgba(255, 0,0, 0.5)")
      // gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)")
      // gradient.addColorStop(1, "rgba(255, 0, 0, 0)")

      // setBG(gradient)
      // console.log(gradient)
    }
  }, [chartData, line, storedSettings])

  // useEffect(() => {
  //   const ctx = chartRef.current.getContext("2d")
  //     gradient = ctx.createLinearGradient(0, 0, 0, 450)
  //     gradient.addColorStop(0, "rgba(255, 0,0, 0.5)")
  //     gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)")
  //     gradient.addColorStop(1, "rgba(255, 0, 0, 0)")

  // },[bg])

  const toggleModal = () => {
    let current = isOpen
    setIsOpen(!current)
  }
  const toggleDownload = () => {
    let current = isDownload
    setIsDownload(!current)
  }

  const handleDownload = (e) => {
    e.preventDefault()
    let canvas = chartRef.current
    let tagA = document.createElement("a")
    document.body.appendChild(tagA)
    tagA.href = canvas.toDataURL()
    tagA.download = "Myimg.png"
    tagA.click()
    document.body.removeChild(tagA)
  }

  // const renderPrice = () => {
  //   let colors = ""

  //   if (mainInfo) {
  //     if (priceNow > 0) {
  //       colors = { color: "green" }
  //     } else {
  //       colors = { color: "red" }
  //     }

  //     return (
  //       <>
  //         <div className={Styles.flexTitle}>
  //           <img src={mainInfo.image} alt={mainInfo.name} />
  //           {/* <h4>{mainInfo.name}</h4> */}
  //         </div>
  //         <div>
  //           {/* <p className={Styles.price}>
  //             Current Price: ${mainInfo.current_price}
  //           </p> */}
  //           {/* <p style={colors}>
  //             {time} Day Change: ${priceNow}
  //           </p> */}
  //         </div>
  //       </>
  //     )
  //   }
  // }
  return (
    <>
      <div className={Styles.wrapper}>
        {/* <div className={Styles.topFlex}>{renderPrice()}</div> */}
        <div className={Styles.chartSize}>
          <canvas ref={chartRef} id="myChart" height={400} width={600} />
        </div>

        <GetDays handleTime={handleTime} text={text} />

        <DownloadComponent
          toggleModal={toggleModal}
          toggleDownload={toggleDownload}
          handleDownload={handleDownload}
          isDownload={isDownload}
          isOpen={isOpen}
        />
      </div>
      {/* <Interface /> */}
    </>
  )
}

export default Chart
