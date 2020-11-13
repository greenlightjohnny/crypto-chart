import React, { useRef, useEffect } from "react"
import ChartJS from "chart.js"
import "chartjs-plugin-deferred"

import { data, historyOptions } from "../../chartconfig/doughnutconfig"

const LandingDoughnut = () => {
  const chartRef = useRef()

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
    </div>
  )
}

export default LandingDoughnut
