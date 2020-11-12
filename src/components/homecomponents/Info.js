import React from "react"
import Styles from "../../styles/title.module.scss"
const Info = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.flexItem}>
          <h3>Cryptocurrency Data</h3>
          <p>
            Fully customizable data displays on over 1,000 coins. See historical
            highs, lows, daily price changes and more for any coins you want.
          </p>
        </div>
        <div className={Styles.flexItem}>
          <h3>Just Data</h3>
          <p>
            That's it. Nothing else. Accounts are free.No sales pitch. No ads.
            We don't sell your personal info. No spam. The only cookie we use is
            for accessing your personal account, no tracking.
          </p>
        </div>
      </div>
      <div className={Styles.test}></div>
    </>
  )
}

export default Info
