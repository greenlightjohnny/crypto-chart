export const historyOptions = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5,
  },
  animation: {
    duration: 2000,
  },
  tooltips: {
    mode: "index",
    enabled: true,
    intersect: false,
  },
  spanGaps: false,
  hover: {
    mode: "index",
    intersect: false,
  },
  elements: {
    line: {
      tension: 1,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [
      {
        type: "time",
        distribution: "linear",
      },
    ],
  },
}
