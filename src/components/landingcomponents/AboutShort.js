import React from "react"
import Styles from "../../styles/homext.module.scss"
const AboutShort = () => {
  return (
    <section className={Styles.main}>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <h2>Ohhhh Shiny!</h2>
          <p>
            Nothing groundbreaking here folks, move along! Just some cool
            looking charts you can create based off of Cryptocurrency and easily
            download as an image or share to friends/enemies.
          </p>
        </div>
        <div className={Styles.grid}>
          <div className={Styles.gridItem}>
            <div className={Styles.gridItemText}>
              <h4>Better, Slowly</h4>
              <p>
                Constantly working to add new features and fix the terrible
                existing code which I certainly did not write. More exchange
                datasets slowly being added, more customization, more bugs, and
                maybe even a current price exchange ticker.
              </p>
            </div>
            <div className={Styles.gridItemIcon}></div>
          </div>

          <div className={Styles.gridItem}>
            <div className={Styles.gridItemText}>
              <h4>Free! (for now)</h4>
              <p>
                Because no one would pay for this, especially when there are
                already 20 sites doing the exact same thing. As long as the
                servers don't get hugged to death and run up a huge bandwidth
                bill, it's free.
              </p>
            </div>
            <div className={Styles.gridItemIcon}></div>
          </div>
          <div className={Styles.gridItem}>
            <div className={Styles.gridItemText}>
              <h4> no pop-ups, no cookies*</h4>
              <p>
                We hate them more than you. No need to register to get started,
                but if you want to save your progress it is a good idea. Pinkie
                promise we won't sell your email address to marketers. <br></br>
                * Okay, if you register we do store a login token in a cookie
                but it does no tracking.
              </p>
            </div>
            <div className={Styles.gridItemIcon}></div>
          </div>
          <div className={Styles.gridItem}>
            <div className={Styles.gridItemText}>
              <h4>Happy Happy</h4>
              <p>Delete your account anytime.</p>
            </div>
            <div className={Styles.gridItemIcon}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutShort
