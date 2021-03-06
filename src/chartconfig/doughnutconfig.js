export const historyOptions = {
  cutoutPercentage: 60,
  title: {
    display: true,
    fontSize: "20",
    text: "Track Data",
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
  },
}

export const data = {
  datasets: [
    {
      label: "Daily Gains",
      borderColor: "Transparent",
      data: [12, 24, 26],
      backgroundColor: [
        "rgba(237, 100, 166, 1)",
        "rgba(102, 126, 234, 1)",
        "rgb(59, 236, 112)",
      ],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Loss", "Blue", "Green"],
}
