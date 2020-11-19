import React from "react"
import checkboxSwitch from "../styles/switch.module.scss"
export default () => {
  return (
    <div className={checkboxSwitch.cointainer}>
      <input
        className={checkboxSwitch.checkbox}
        id={`checkboxSwitch`}
        type="checkbox"
      />
      <label className={checkboxSwitch.background} htmlFor={`checkboxSwitch`}>
        <div className={checkboxSwitch.button}></div>
      </label>
    </div>
  )
}
