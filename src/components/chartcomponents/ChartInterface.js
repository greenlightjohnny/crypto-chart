import React from "react"
import Styles from "../../styles/chartinterface.module.scss"
const ChartInterface = () => {
  return (
    <div className={Styles.interface}>
      <div className={Styles.gridContainer}>
        {/* <div class={Styles.coinName}>
          <h4>Fast View</h4>
          <p>BitCoin</p>
          <p>Symbol: </p>
          <p>Price:</p>
          <p>aa</p>
        </div>
        <div className={Styles.high}>
          <h4>Time Frame</h4>
          <p>Start: 44</p>
          <p>End: 55</p>
          <p>Low: 33</p>
          <p>High: 77</p>
          <p>Price Change: 11</p>
          <p>Price % Change: 21%</p>
          <p>Swing: 44</p>
          <p>Swing Change: 44</p>
          <p>Swing % Change: 33%</p>
        </div> */}
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
  )
}

export default ChartInterface
