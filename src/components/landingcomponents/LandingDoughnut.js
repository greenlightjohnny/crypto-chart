import React, { useRef, useEffect } from "react"
import ChartJS from "chart.js"
import "chartjs-plugin-deferred"

import { data, historyOptions } from "../../chartconfig/doughnutconfig"

const LandingDoughnut = () => {
  const chartRef = useRef()

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

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new ChartJS(chartRef.current, {
        type: "doughnut",
        data: { ...data },
        options: { ...historyOptions },
      })
    }
  }, [])

  return (
    <div>
      <canvas ref={chartRef} id="myChart" height={300} width={300} />
      <a onClick={handleDownload} download="Chart.jpg">
        Download
      </a>
    </div>
  )
}

export default LandingDoughnut
