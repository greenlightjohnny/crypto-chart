import React from "react"
import Styles from "../styles/homext.module.scss"
const Homext = () => {
  return (
    <section className={Styles.main}>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <h2>
            Practice trading crypto with play money before moving onto real
            money
          </h2>
          <p>
            You're still going to lose your real money, but at least now you can
            pretend that you made an effort.
          </p>
        </div>
        <div className={Styles.grid}>
          <div className={Styles.gridItem}>
            <div className={Styles.gridItemText}>
              <h4>Coins Galore</h4>
              <p>
                All the Alt coins you could ever possibly want, and then some.
                An excellent and time tested method to depleting your account.
              </p>
            </div>
            <div className={Styles.gridItemIcon}></div>
          </div>

          <div className={Styles.gridItem}>
            <div className={Styles.gridItemText}>
              <h4>Free!</h4>
              <p>Because no one would pay for this</p>
            </div>
            <div className={Styles.gridItemIcon}></div>
          </div>
          <div className={Styles.gridItem}>
            <div className={Styles.gridItemText}>
              <h4>No Ads, no pop-ups, no cookies*</h4>
              <p>
                We hate them more than you. No need to register to get started,
                but if you want to save your progress it is a good idea. Pinkie
                promise we won't sell your email address to marketers.
              </p>
            </div>
            <div className={Styles.gridItemIcon}></div>
          </div>
          <div className={Styles.gridItem}>
            <div className={Styles.gridItemText}>
              <h4>Realistic</h4>
              <p>
                We use live values for each play transaction, and even take the
                same % fee of your play money that live sites use.
              </p>
            </div>
            <div className={Styles.gridItemIcon}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homext
