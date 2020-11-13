import React, { useContext, useState, useEffect } from "react"
import Styles from "../../styles/chartcustom.module.scss"
import { CurrencyContext } from "../../context/currencyContext"
import { SketchPicker, ChromePicker } from "react-color"
const ChartCustom = () => {
  const { line, handleLine } = useContext(CurrencyContext)
  const [show, setShow] = useState(false)
  const [currentColor, setCurrentColor] = useState()
  const colorChanger = (color) => {
    console.log(color)
  }

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
    <div className={Styles.modal}>
      <div className={Styles.flex}>
        <div className={Styles.flexItem}>
          <p>Line</p> <button>-Color</button>
          <button>+Color</button>
          <button>Size</button>
        </div>
        <div className={Styles.flexItem}>
          <p>Line</p> <button>+color</button>
          <button onClick={() => setShow(true)}>
            -color
            <div
              className={Styles.sample}
              style={{ background: `${currentColor}` }}
            />
          </button>
          {show ? (
            <div className={Styles.pop}>
              <div
                className={Styles.cover}
                onClick={() => handleClose("lineNeg")}
              />
              <ChromePicker color={line.lineNeg} onChange={handleP} />{" "}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ChartCustom
