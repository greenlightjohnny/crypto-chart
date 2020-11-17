import React from "react"
import Styles from "../../styles/newgrid.module.scss"
import "../../../node_modules/react-grid-layout/css/styles.css"
import "../../../node_modules/react-resizable/css/styles.css"
import { Responsive, WidthProvider } from "react-grid-layout"
const ResponsiveGridLayout = WidthProvider(Responsive)
const NewGridMap = (props) => {
  console.log(props)

  const { coinCurrent, widgetMap } = props.coins
  const layouts = {
    lg: [
      { i: "1", x: 0, y: 0, w: 6, h: 2, minW: 1 },
      { i: "2", x: 6, y: 0, w: 6, h: 2, minW: 1, maxW: 6 },
      { i: "3", x: 12, y: 0, w: 6, h: 2 },
      { i: "4", x: 18, y: 0, w: 6, h: 2 },
      { i: "5", x: 24, y: 0, w: 6, h: 2, minW: 1 },
    ],
    md: [
      { i: "1", x: 0, y: 0, w: 4, h: 2, minW: 2 },
      { i: "2", x: 4, y: 0, w: 4, h: 2, minW: 2 },
      { i: "3", x: 8, y: 0, w: 4, h: 2, minW: 2 },
      { i: "4", x: 12, y: 0, w: 4, h: 2, minW: 2 },
      { i: "5", x: 16, y: 0, w: 4, h: 2, minW: 2 },
    ],
    sm: [
      { i: "1", x: 0, y: 0, w: 5, h: 2 },
      { i: "2", x: 5, y: 0, w: 5, h: 2, minW: 1 },
      { i: "3", x: 10, y: 0, w: 5, h: 2 },
      { i: "4", x: 15, y: 0, w: 5, h: 2 },
      { i: "5", x: 0, y: 2, w: 5, h: 2 },
    ],
    xs: [
      { i: "1", x: 0, y: 0, w: 5, h: 2 },
      { i: "2", x: 5, y: 0, w: 5, h: 2, minW: 1 },
      { i: "3", x: 10, y: 0, w: 5, h: 2 },
      { i: "4", x: 5, y: 2, w: 5, h: 2 },
      { i: "5", x: 0, y: 2, w: 5, h: 2 },
    ],
    xxs: [
      { i: "1", x: 0, y: 0, w: 5, h: 2 },
      { i: "2", x: 5, y: 0, w: 5, h: 2, minW: 2 },
      { i: "3", x: 0, y: 2, w: 5, h: 2 },
      { i: "4", x: 5, y: 2, w: 5, h: 2 },
      { i: "5", x: 0, y: 3, w: 5, h: 2 },
    ],
  }

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1300, md: 996, sm: 768, xs: 430, xxs: 0 }}
      cols={{ lg: 30, md: 20, sm: 20, xs: 15, xxs: 10 }}
    >
      {widgetMap.map((item, index) => {
        console.log(layouts.lg[index].i)
        return (
          <div key={layouts.lg[index].i} className={Styles.card}>
            <h4>{item.title}</h4>

            {item.widge.map((i) => {
              return (
                <div key={i.value} className={Styles.blurb}>
                  <p>{i.name}</p>
                  <p className={Styles.blurbHigh}>
                    {coinCurrent.mainInfo[i.value]}
                  </p>
                </div>
              )
            })}
          </div>
        )
      })}
    </ResponsiveGridLayout>
  )
}

export default NewGridMap
