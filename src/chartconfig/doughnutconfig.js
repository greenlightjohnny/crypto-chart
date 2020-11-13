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
    animateScale: true,
    animateRotate: true,
  },
  plugins: {
    deferred: {
      enabled: true,
      xOffset: 150, // defer until 150px of the canvas width are inside the viewport
      yOffset: "50%", // defer until 50% of the canvas height are inside the viewport
      delay: 500, // delay of 500 ms after the canvas is considered inside the viewport
    },
  },
}

export const data = {
  datasets: [
    {
      label: "Gains",
      data: [12, 24, 26],
      backgroundColor: [
        "rgb(211, 90, 90)",
        "rgb(59, 59, 236)",
        "rgb(59, 236, 112)",
      ],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Red", "Blue", "Green"],
}
