import React from "react"
import Styles from "../../styles/chartcustom.module.scss"

const ChartCustom = () => {
  return (
    <div className={Styles.modal}>
      <div className={Styles.flex}>
        <div className={Styles.flexItem}>
          <p>Line Color</p> <button>-change</button>
          <button>+change</button>
        </div>
      </div>
    </div>
  )
}

export default ChartCustom
