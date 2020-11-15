import React from "react"
import Doh from "./LandingDoughnut"
import Styles from "../../styles/chartselect.module.scss"
import PieChart from "./PieChart"
const ChartSelect = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.flexL}>
        <div className={Styles.flexOne}>
          <h3>Chart Types</h3>
          <p>Pick from many different chart and graph styles. </p>
        </div>
        <div className={Styles.flexTwo}>
          <div className={Styles.flexTwoInfo}>
            <ul>
              <li>One</li>
              <li>One</li>
              <li>One</li>
              <li>One</li>
              <li>One</li>
            </ul>
          </div>
          <PieChart />
        </div>
      </div>
    </div>
  )
}

export default ChartSelect
