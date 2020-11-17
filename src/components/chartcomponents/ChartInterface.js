import React, { useState } from "react"
import Styles from "../../styles/chartinterface.module.scss"
import GridOut from "./GridOut"

const ChartInterface = () => {
  return (
    <>
      <GridOut />
      <div className={Styles.interface}>
        <div className={Styles.gridContainer}>
          <div className={Styles.coinName}>
            <h4>Market</h4>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
          </div>
          <div className={Styles.high}>
            <h4>Market</h4>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
          </div>

          <div className={Styles.market}>
            <h4>Market</h4>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
          </div>
          <div className={Styles.holdings}>
            <h4>Holdings</h4>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
          </div>

          <div className={Styles.end}>
            <h4>Holdings</h4>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
            <div className={Styles.blurb}>
              <p>Volume:</p>
              <p className={Styles.blurbHigh}>1,444,000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChartInterface
