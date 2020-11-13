import React from "react"
import Styles from "../styles/landing.module.scss"
import Laptop from "../images/laptop.png"
import Community from "./landingcomponents/Community"
import Doughnut from "./landingcomponents/LandingDoughnut"
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
              Koofer.io is a free extremely customizable cryptocurrency tracking
              app. View current and historical prices, track your portfolio, and
              look at pretty charts created from your data. <br></br>
              Totally free. No spam. We don't sell your data.
            </p>
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
    </>
  )
}

export default Landing
