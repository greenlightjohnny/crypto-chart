import React, { useContext, useState, useEffect } from "react"
import Styles from "../../styles/item.module.scss"
import { CurrencyContext } from "../../context/currencyContext"
import { SketchPicker, ChromePicker } from "react-color"

const Line = () => {
  const { line, handleLine, userSettings } = useContext(CurrencyContext)
  const [currentColor, setCurrentColor] = useState()
  const colorChanger = (color) => {
    console.log(color)
  }
  const [show, setShow] = useState({
    visible: false,
    current: "",
    target: "",
  })
  const [newSettings, setNewSettings] = useState({})
  const [currentBg, setCurrentBg] = useState({
    positive: userSettings.lineInfo.colorPositive,
    negative: userSettings.lineInfo.colorNegative,
  })
  useEffect(() => {}, [])

  const handleP = (color) => {
    setCurrentColor(color.hex)
  }

  const handleClose = (item, target) => {
    console.log(item, target)
    setNewSettings({
      ...newSettings,
      target: {
        item: currentColor,
      },
    })
    setShow({
      visible: false,
      current: "",
      target: "",
    })
    console.log(newSettings)
    //handleLine(item, currentColor)
  }
  let myTest
  const check = (color) => {
    if (newSettings.hasOwnProperty("lineInfo")) {
      return (myTest = newSettings.lineInfo[color])
    } else {
      return (myTest = userSettings.lineInfo[color])
    }
  }

  console.log(check())
  return (
    <div className={Styles.overall}>
      <p>Chart Line</p>
      <div className={Styles.flexMe}>
        <button
          onClick={() =>
            setShow({
              visible: true,
              current: "lineColor",
              target: "lineColor",
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
          onClick={() =>
            setShow({
              visible: true,
              current: "lineColor",
              target: "lineColor",
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
            <SketchPicker color={line.lineNeg} onChange={handleP} />{" "}
          </div>
        ) : null}
      </div>
      <button className={Styles.setAll}>Apply</button>
    </div>
  )
}

export default Line
