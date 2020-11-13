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
    animateScale: true,
    animateRotate: false,
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
      data: [10, 20, 30],
      backgroundColor: ["red", "blue", "green"],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Red", "Blue", "Green"],
}
