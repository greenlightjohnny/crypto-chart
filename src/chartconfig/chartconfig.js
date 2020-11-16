import React from "react"
import { CurrencyContext } from "../context/currencyContext"

export const SendMe = (coinName, color, currentPrice) => {
  return {
    lineHeightAnnotation: {
      always: true,
      hover: false,
      lineWeight: 1.5,
    },
    line: {
      borderWidth: 0.1,
    },

    legend: {
      display: false,
      labels: {
        fontColor: "#000",
      },
    },
    title: {
      display: true,
      fontSize: 20,
      text: `${coinName}: ${currentPrice}`,
      fontColor: color,
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
}

export const historyOptions = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5,
  },

  legend: {
    labels: {
      fontColor: "#000",
    },
  },
  title: {
    display: true,
    fontSize: 20,
    text: "Test",
    fontColor: "red",
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
