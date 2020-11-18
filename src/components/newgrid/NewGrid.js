import React, { useState, useContext, useEffect } from "react"
import _ from "lodash"
//import RGL, { WidthProvider } from "react-grid-layout"
import Styles from "../../styles/newgrid.module.scss"
//const ReactGridLayout = WidthProvider(RGL)
import "../../../node_modules/react-grid-layout/css/styles.css"
import "../../../node_modules/react-resizable/css/styles.css"
import { Responsive, WidthProvider } from "react-grid-layout"
import { Data } from "./NewData"
import NewGridMap from "./NewGridMap"
import { CoinContext } from "../../context/coinContext"
const ResponsiveGridLayout = WidthProvider(Responsive)

const MyResponsiveGrid = () => {
  const { coinCurrent, widgetMap, setCoinCurrent } = useContext(CoinContext)
  //const [] = useState()
  //console.log(coinCurrent, widgetMap)
  //console.log(CoinContext)
  const [oldInfo, setOldInfo] = useState(false)

  useEffect(() => {
    setOldInfo({ coinCurrent, widgetMap })
    //console.log(coinCurrent)
  }, [coinCurrent])
  //console.log(oldInfo)

  let testCase = oldInfo
  return (
    <div className={Styles.top}>
      {testCase !== false ? <NewGridMap coins={oldInfo} /> : <p>Loading</p>}
    </div>
  )
}
export default MyResponsiveGrid
// if (process.env.STATIC_EXAMPLES === true) {
//   import("../test-hook.jsx").then((fn) => fn.default(BasicLayout))
// }
