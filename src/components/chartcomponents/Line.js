import React, { useContext, useState, useEffect } from "react"
import Styles from "../../styles/item.module.scss"
import { CurrencyContext } from "../../context/currencyContext"
import { SketchPicker, ChromePicker } from "react-color"

const Line = () => {
  const { line, handleLine } = useContext(CurrencyContext)
  const [currentColor, setCurrentColor] = useState()
  const colorChanger = (color) => {
    console.log(color)
  }
  const [show, setShow] = useState(false)

  useEffect(() => {
    setCurrentColor(line.lineNeg)
  }, [])
  const handleP = (color) => {
    setCurrentColor(color.hex)
    console.log(color.rgb)
  }
  const handleClose = (item) => {
    setShow(false)
    console.log(item)
    handleLine(item, currentColor)
  }

  return (
    <div className={Styles.flexMe}>
      <p>Line</p> <button>+color</button>
      <button onClick={() => setShow(true)}>-color</button>
      <div
        className={Styles.sample}
        style={{ background: `${currentColor}` }}
      />
      {show ? (
        <div className={Styles.pop}>
          <div
            className={Styles.cover}
            onClick={() => handleClose("lineNeg")}
          />
          <SketchPicker color={line.lineNeg} onChange={handleP} />{" "}
        </div>
      ) : null}
    </div>
  )
}

export default Line
