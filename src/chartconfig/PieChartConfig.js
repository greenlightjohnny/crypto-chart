export const historyOptions = {
  cutoutPercentage: 0,
  title: {
    display: true,
    fontSize: "20",
    text: "Current Holdings",
  },
  legend: {
    fontSize: "20",
    position: "bottom",
  },
  animation: {
    duration: 2000,
    animateScale: false,
    animateRotate: true,
  },
  tooltip: {
    enabled: true,
  },
  plugins: {
    deferred: {
      enabled: true,
      xOffset: 150, // defer until 150px of the canvas width are inside the viewport
      yOffset: "30%", // defer until 50% of the canvas height are inside the viewport
      delay: 500, // delay of 500 ms after the canvas is considered inside the viewport
    },
    datalabels: {
      formatter: (value, ctx) => {
        let sum = 0
        let dataArr = ctx.chart.data.datasets[0].data
        dataArr.map((data) => {
          sum += data
        })
        let percentage = ((value * 100) / sum).toFixed(2) + "%"
        return percentage
      },
      color: "#fff",
    },
  },
}

export const data = {
  datasets: [
    {
      label: "Daily Gains",
      borderColor: "Transparent",
      data: [12, 24, 26, 33, 11, 5, 9],
      backgroundColor: [
        "rgba(237, 100, 166, 1)",
        "rgba(102, 126, 234, 1)",
        "rgb(59, 236, 112)",
        "#ed7410",
        "#ede010",
        "#5c16a0",
        "#2e20a4",
      ],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["ETH", "XRP", "DOGE", "DRGN", "ADA", "XMR", "EOS"],
}
