import React from "react"
import Styles from "../../../styles/item.module.scss"
import Button from "../../../utils/Button"
const DownloadData = ({ down, exit }) => {
  return (
    <div className={Styles.overall}>
      <p>Chart Line Options</p>
      <div className={Styles.flexMe}>
        <button className={Styles.itemBtn}>
          {" "}
          Positive
          <div className={Styles.sampleColor} />
        </button>
        <button className={Styles.itemBtn}>
          {" "}
          Negative
          <div className={Styles.sampleColor} />
        </button>
      </div>
      <div className={Styles.bottom}>
        <Button
          className={Styles.yep}
          textColor="#fff"
          mycolor="#1292ee"
          text="Download"
          handleIt={down}
        />
        <Button
          className={Styles.yep}
          textColor="#fff"
          mycolor="#de1f1f"
          text="Discard"
          onClick={exit}
        />
        <Button
          className={Styles.yep}
          textColor="#fff"
          mycolor="#de1f1f"
          text="Close"
          handleIt={exit}
        />
      </div>
    </div>
  )
}

export default DownloadData
