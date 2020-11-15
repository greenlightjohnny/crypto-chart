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
          <p>
            Variety is the spice of life! Look at data in Line Charts. Or maybe
            you are Bar Chart type of person. Get crazy with Radar Charts. Enjoy
            Pie and Doughnut Charts.{" "}
          </p>
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
