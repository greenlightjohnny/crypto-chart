import React from "react"
import Styles from "../../styles/landing.module.scss"
const Community = () => {
  return (
    <section className={Styles.landing3}>
      <div className={Styles.container3}>
        <h2>Community</h2>
        <p>Tell us your plays so we can inverse them</p>
        <div className={Styles.flex3}>
          <div className={Styles.flexItem3}>
            <h4>Leader Boards</h4>
            <p>
              Play money leader boards, shows your rank against others playing.
              Optional, with the ability to not be listed, show your rank only,
              or show your trades and rank
            </p>
          </div>
          <div className={Styles.flexItem3}>
            <h4>Forums</h4>
            <p>
              Friendly community of shills waiting to sell you their heavy bags.
              Seriously.
            </p>
          </div>
          <div className={Styles.flexItem3}>
            <h4>Chat Rooms</h4>
            <p>
              It's 1999 all over again. Why anyone would want this, we don't
              know. Either totally empty or filled with scammers and spam.
              A/S/L?{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
