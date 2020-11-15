import React, { useContext, useState, useEffect } from "react"
import Styles from "../../styles/item.module.scss"
import { CurrencyContext } from "../../context/currencyContext"
import { SketchPicker, ChromePicker } from "react-color"
import Button from "../../utils/Button"
const Line = ({ exit }) => {
  //console.log(exit)
  const {
    line,
    handleLine,
    handleUserSettings,
    storedSettings,
    userSettings,
  } = useContext(CurrencyContext)
  const [currentColor, setCurrentColor] = useState()
  const colorChanger = (color) => {
    //console.log(color)
  }
  const [show, setShow] = useState({
    visible: false,
    current: "",
    target: "",
  })
  const [newSettings, setNewSettings] = useState({ ...storedSettings })
  const [currentBg, setCurrentBg] = useState({
    positive: userSettings.lineInfo.colorPositive,
    negative: userSettings.lineInfo.colorNegative,
  })
  useEffect(() => {}, [])

  const handleP = (color) => {
    setCurrentColor(color.hex)
  }

  const handleSelect = (item) => {
    //console.log(item)
    const colorPick = item.target
    setShow(item)
    setCurrentColor(newSettings.lineInfo[colorPick])
  }

  const handleClose = (item, target) => {
    //console.log(item, target)
    let umm = item
    setNewSettings({
      ...newSettings,
      [umm]: { ...newSettings.lineInfo, [target]: currentColor },
    })
    setShow({
      visible: false,
      current: "",
      target: "",
    })
    //console.log(newSettings)
    //console.log(currentColor)
    //handleLine(item, currentColor)
  }

  let myTest
  const check = (color) => {
    if (newSettings.hasOwnProperty("lineInfo")) {
      return (myTest = newSettings.lineInfo[color])
    } else {
      return (myTest = storedSettings.lineInfo[color])
    }
  }

  const handleChange = () => {
    console.log(newSettings)
    handleUserSettings(newSettings)
  }

  const handleExit = () => {}

  return (
    <div className={Styles.overall}>
      <p>Chart Line Options</p>
      <div className={Styles.flexMe}>
        <button
          className={Styles.itemBtn}
          onClick={() =>
            setShow({
              visible: true,
              current: "lineInfo",
              target: "colorPositive",
            })
          }
        >
          {" "}
          Positive
          <div
            className={Styles.sampleColor}
            style={{
              background: check("colorPositive"),
            }}
          />
        </button>
        <button
          className={Styles.itemBtn}
          onClick={() =>
            handleSelect({
              visible: true,
              current: "lineInfo",
              target: "colorNegative",
            })
          }
        >
          {" "}
          Negative
          <div
            className={Styles.sampleColor}
            style={{ background: check("colorNegative") }}
          />
        </button>

        {show.visible ? (
          <div className={Styles.pop}>
            <div
              className={Styles.cover}
              onClick={() => handleClose(show.current, show.target)}
            />
            <SketchPicker color={currentColor} onChange={handleP} />{" "}
          </div>
        ) : null}
      </div>
      <div className={Styles.bottom}>
        <Button
          className={Styles.yep}
          textColor="#fff"
          mycolor="#1292ee"
          text="Apply"
          onClick={handleChange}
        />
        <Button
          className={Styles.yep}
          textColor="#fff"
          mycolor="#de1f1f"
          text="Discard"
          onClick={handleChange}
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

export default Line
