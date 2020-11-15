import React from "react"
import Styles from "../styles/landing.module.scss"
import Laptop from "../images/laptop2.png"
import Community from "./landingcomponents/Community"
import Doughnut from "./landingcomponents/LandingDoughnut"
import Button from "../utils/Button"
import AnchorButton from "../utils/AnchorButton"
import ChartSelect from "./landingcomponents/ChartSelect"
const Landing = () => {
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.flex}>
          <div className={Styles.flexItem}>
            <h2>
              Cryptocurrency Data{" "}
              <span className={Styles.high}>Visualized</span>
            </h2>
            <p>
              Salamander.io is a free Cryptocurrency tracker and visualization
              tool. Turn your portfolio into a graph. Track current prices.
              Create historical charts for specific dates of over 1,000 coins.
              Choose from numerous graph types and styles. Highly customizable
              from the data sets down to the colors, downloadable as images.
            </p>

            <AnchorButton goto="/register" mycolor="#3134ff" text="Sign Up" />
          </div>
          <div className={Styles.flexItem}>
            <div className={Styles.imgContainer}>
              <img src={Laptop} alt="laptop with data on the screen" />
            </div>
          </div>
        </div>
      </div>
      <section className={Styles.landing2}>
        <div className={Styles.container}>
          <div className={Styles.flexItem2}>
            <h2>Your Portfolio. Visualized</h2>
            <p>
              Do you like pretty charts? Clean user interfaces? No popups? Well
              you came to the right place! Customizable down to the colors, we
              provide amazing tools to turn your cryptocurrency portfolio data
              into shiny graphs and charts.{" "}
            </p>
          </div>
          <div className={Styles.flexItem2}>
            <Doughnut />
          </div>
        </div>
      </section>
      <Community />
      <ChartSelect />
    </>
  )
}

export default Landing
