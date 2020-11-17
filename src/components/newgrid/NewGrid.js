import React, { useState, useContext } from "react"
import _ from "lodash"
//import RGL, { WidthProvider } from "react-grid-layout"
import Styles from "../../styles/newgrid.module.scss"
//const ReactGridLayout = WidthProvider(RGL)
import "../../../node_modules/react-grid-layout/css/styles.css"
import "../../../node_modules/react-resizable/css/styles.css"
import { Responsive, WidthProvider } from "react-grid-layout"
import { Data } from "./NewData"

import { CoinContext } from "../../context/coinContext"
const ResponsiveGridLayout = WidthProvider(Responsive)
class MyResponsiveGrid extends React.Component {
  static contextType = CoinContext

  componentDidMount() {
    const coinC = this.context
    console.log(coinC)
  }
  render() {
    // {lg: layout1, md: layout2, ...}
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
    //var layouts = getLayoutsFromSomewhere();
    return (
      <div className={Styles.top}>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1300, md: 996, sm: 768, xs: 430, xxs: 0 }}
          cols={{ lg: 30, md: 20, sm: 20, xs: 15, xxs: 10 }}
        >
          {Data.map((item) => {
            return (
              <div key={item.id} className={Styles.card}>
                <h4>{item.content.title}</h4>
                {item.content.fields.map((i) => {
                  return (
                    <div key={i.title} className={Styles.blurb}>
                      <p>{i.title}</p>
                      <p className={Styles.blurbHigh}>{i.value}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
          {/* <div key={1} className={Styles.blurb}>
            <p>Volume:</p>
            <p className={Styles.blurbHigh}>1,444,000</p>
          </div>
          <div key={2} className={Styles.blurb}>
            <p>Volume:</p>
            <p className={Styles.blurbHigh}>1,444,000</p>
          </div>
          <div key={3} className={Styles.blurb}>
            <p>Volume:</p>
            <p className={Styles.blurbHigh}>1,444,000</p>
          </div>
          <div key={4} className={Styles.blurb}>
            <p>Volume:</p>
            <p className={Styles.blurbHigh}>1,444,000</p>
          </div>
          <div key={5} className={Styles.blurb}>
            <p>Volume:</p>
            <p className={Styles.blurbHigh}>1,444,000</p>
          </div> */}
        </ResponsiveGridLayout>
      </div>
    )
  }
}
export default MyResponsiveGrid
// if (process.env.STATIC_EXAMPLES === true) {
//   import("../test-hook.jsx").then((fn) => fn.default(BasicLayout))
// }
