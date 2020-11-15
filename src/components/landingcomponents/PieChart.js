import React, { useEffect, useRef } from "react"
import ChartJS from "chart.js"
import "chartjs-plugin-deferred"
import { data, historyOptions } from "../../chartconfig/PieChartConfig"
import ChartDataLabels from "chartjs-plugin-datalabels"
ChartJS.plugins.unregister(ChartDataLabels)

const PieChart = () => {
  const chartPie = useRef()

  useEffect(() => {
    if (chartPie && chartPie.current) {
      const chartInstancePie = new ChartJS(chartPie.current, {
        type: "pie",
        plugins: [ChartDataLabels],
        data: { ...data },
        options: { ...historyOptions },
      })
    }
  }, [])

  return (
    <div>
      <canvas ref={chartPie} id="myChart" height={300} width={300} />
    </div>
  )
}

export default PieChart
