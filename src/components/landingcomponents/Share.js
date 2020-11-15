import React from "react"
import Styles from "../../styles/share.module.scss"
import ChartEx from "../../images/chartex.png"
const Share = () => {
  return (
    <div className={Styles.mainShare}>
      <div className={Styles.shareFlex}>
        <div className={Styles.shareFlexTwo}>
          <div className={Styles.shareImg}>
            <img src={ChartEx} alt="Graph showing currency going down" />
          </div>
        </div>
        <div className={Styles.shareFlexOne}>
          <p>Title</p>
        </div>
      </div>
    </div>
  )
}

export default Share
