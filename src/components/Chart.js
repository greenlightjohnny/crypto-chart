import React, { useRef, useEffect, useState, useContext } from "react"
import ChartJS from "chart.js"
import Styles from "../styles/chart.module.scss"
import { historyOptions } from "../chartconfig/chartconfig"
import { CurrencyContext } from "../context/currencyContext"
import Gear from "../images/gear.svg"
import Down from "../images/download.svg"
import Download from "./chartcomponents/Download"
import Custom from "./chartcomponents/ChartCustom"
const Chart = ({ chartData, handleTime, time, text }) => {
  const chartRef = useRef()
  const { line, userSettings, storedSettings } = useContext(CurrencyContext)
  const { days, mainInfo } = chartData
  const { daysLength, setDaysLength } = useState("24")
  const [customValue, setCustomValue] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isDownload, setIsDownload] = useState(false)
  const [priceNow, setPriceNow] = useState("")
  const [buttonList, setButtonList] = useState([
    { time: 1, text: "1D" },
    { time: 7, text: "1W" },
    { time: 30, text: "1M" },
    { time: 180, text: "6M" },
    { time: 365, text: "1Y" },
    { time: 999, text: "Submit" },
  ])
  // console.log(chartData)
  //console.log(main.name)
  //let coinName = main.name || "coin"
  //console.log(coinName)
  // let gradient = chartRef.createLinearGradient(0, 0, 0, 400)
  // gradient.addColorStop(0, "rgba(250,174,50,1)")
  // gradient.addColorStop(1, "rgba(250,174,50,0)")

  //console.log(mainInfo)

  let priceDifference

  let coinName
  let timeFrame
  let pChange
  let gradient
  let gradient2
  // let cOptions = {
  //   type: "line",
  //   data: {
  //     datasets: [
  //       {
  //         label: `${coinName} price`,
  //         data: days,
  //         //backgroundColor: gradient,
  //         backgroundColor: pChange < 0 ? gradient : gradient2,
  //         borderColor: "rgb(250, 73, 73)",
  //         pointRadius: 0,
  //       },
  //     ],
  //   },
  //   options: { ...historyOptions },
  // }
  //console.log(storedSettings.lineInfo.colorPositive)

  console.log(storedSettings)
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d")
      gradient = ctx.createLinearGradient(0, 0, 0, 450)
      gradient2 = ctx.createLinearGradient(0, 0, 0, 450)

      gradient.addColorStop(0, "rgba(255, 0,0, 0.5)")
      gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)")
      gradient.addColorStop(1, "rgba(255, 0, 0, 0)")

      gradient2.addColorStop(0, "rgba(0, 255, 34, 0.6)")
      gradient2.addColorStop(0.5, "rgba(0, 255, 34, 0.2)")
      gradient2.addColorStop(1, "rgba(0, 255, 34, 0)")
      if (chartData.mainInfo !== undefined) {
        coinName = mainInfo.name

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
              label: `${coinName} price`,
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
        options: { ...historyOptions },
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

  const handleChange = (e) => {
    setCustomValue(e.target.value)
  }

  const toggleModal = () => {
    let current = isOpen
    setIsOpen(!current)
  }
  const toggleDownload = () => {
    let current = isDownload
    setIsDownload(!current)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let tak = { time: customValue, text: "Submit" }
    handleTime(tak)
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

  const renderPrice = () => {
    let colors = ""

    if (mainInfo) {
      if (priceNow > 0) {
        colors = { color: "green" }
      } else {
        colors = { color: "red" }
      }

      return (
        <>
          <div className={Styles.flexTitle}>
            <img src={mainInfo.image} alt={mainInfo.name} />
            <h4>{mainInfo.name}</h4>
          </div>
          <div>
            <p className={Styles.price}>
              Current Price: ${mainInfo.current_price}
            </p>
            <p style={colors}>
              {time} Day Change: ${priceNow}
            </p>
          </div>
        </>
      )
    }
  }
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.topFlex}>{renderPrice()}</div>
      <div className={Styles.chartSize}>
        <canvas ref={chartRef} id="myChart" height={400} width={600} />
      </div>
      <div className={Styles.setDays}>
        {buttonList.map((i) => {
          if (i.text === "Submit") {
            return (
              <form
                key={i.text}
                className={Styles.custom}
                onSubmit={handleSubmit}
              >
                <label htmlFor="custom"></label>
                <input
                  className={
                    text === i.text ? Styles.inputActive : Styles.inputSilent
                  }
                  name="custom"
                  type="text"
                  placeholder="Days"
                  value={customValue}
                  onChange={handleChange}
                />

                <button
                  className={text === i.text ? Styles.active : ""}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )
          } else {
            return (
              <button
                key={i.text}
                className={text === i.text ? Styles.active : ""}
                onClick={() => handleTime(i)}
              >
                {i.text}
              </button>
            )
          }
        })}
        {/* <form className={Styles.custom} onSubmit={handleSubmit}>
          <label for="custom"></label>
          <input
            name="custom"
            type="text"
            placeholder="Days"
            value={customValue}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form> */}
        {/* <button onClick={() => handleTime(1)}>24H</button>
        <button onClick={() => handleTime(7)}>1W</button>
        <button onClick={() => handleTime(30)}>1M</button>
        <button onClick={() => handleTime(180)}>6M</button>
        <button onClick={() => handleTime(365)}>1Y</button> */}
      </div>
      <div className={Styles.optionsCon}>
        <div className={Styles.customCon}>
          <button className={Styles.conBtn} onClick={toggleDownload}>
            {" "}
            <img src={Down} alt="Download Icon"></img>
            <span>Download</span>
          </button>
          {isDownload ? (
            <Download
              open={isDownload}
              handleDownload={handleDownload}
              exit={toggleDownload}
            />
          ) : null}
        </div>

        <div className={Styles.customCon}>
          <button className={Styles.conBtn} onClick={toggleModal}>
            {" "}
            <img src={Gear} alt="Settings Icon"></img>
            <span>Settings</span>
          </button>
          {isOpen ? <Custom open={isOpen} exit={toggleModal} /> : null}
        </div>
      </div>
    </div>
  )
}

export default Chart
