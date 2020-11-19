import React from "react"
import Styles from "../../../styles/chart.module.scss"
import Gear from "../../../images/gear.svg"
import Down from "../../../images/download.svg"

import Download from "./Download"
import Custom from "../ChartCustom"

const DownloadComponent = ({
  toggleModal,
  handleDownload,
  toggleDownload,
  isDownload,
  isOpen,
}) => {
  return (
    <div className={Styles.optionsCon}>
      <div className={Styles.customCon}>
        <button className={Styles.conBtn} onClick={toggleDownload}>
          {" "}
          <img src={Down} alt="Download Icon"></img>
          <span>Download</span>
        </button>
        {isDownload ? (
          <Download
            open={isDownload}
            handleDownload={handleDownload}
            exit={toggleDownload}
          />
        ) : null}
      </div>

      <div className={Styles.customCon}>
        <button className={Styles.conBtn} onClick={toggleModal}>
          {" "}
          <img src={Gear} alt="Settings Icon"></img>
          <span>Settings</span>
        </button>
        {isOpen ? <Custom open={isOpen} exit={toggleModal} /> : null}
      </div>
    </div>
  )
}

export default DownloadComponent
