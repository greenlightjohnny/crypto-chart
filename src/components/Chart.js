import React, { useRef, useEffect } from "react"
import ChartJS from "chart.js"
import Styles from "../styles/chart.module.scss"

const Chart = () => {
  const chartRef = useRef()

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new ChartJS(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "# of Votes",
              data: [
                { x: 1, y: 15 },
                { x: 2, y: 12 },
                { x: 3, y: 9 },
                { x: 4, y: 22 },
              ],
              backgroundColor: "rgb(131, 245, 169)",

              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      })
    }
  }, [])
  return (
    <div className={Styles.wrapper}>
      <div></div>
      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250} />
      </div>
    </div>
  )
}

export default Chart
