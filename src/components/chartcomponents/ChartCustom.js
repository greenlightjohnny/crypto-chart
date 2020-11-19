import React, { useContext, useState, useEffect } from "react"
import Styles from "../../styles/chartcustom.module.scss"
import { CurrencyContext } from "../../context/currencyContext"
import { SketchPicker, ChromePicker } from "react-color"
import cx from "classnames"
import { useTransition, useSpring, animated } from "react-spring"

import ColorPicker from "./downloadComponents/Line"
import Button from "../../utils/Button"

const ChartCustom = ({ exit }) => {
  const { line, userSettings, storedSettings, handleLine } = useContext(
    CurrencyContext
  )
  //console.log(exit)
  const [show, setShow] = useState(false)
  const [settingList, setSettingList] = useState([
    { name: "Line", active: false },
    { name: "Background", active: false },
    { name: "Logo", active: false },
    { name: "Coin", active: true },
    { name: "Time", active: false },
    { name: "Grid", active: false },
  ])
  const [currentColor, setCurrentColor] = useState()
  const colorChanger = (color) => {
    console.log(color)
  }
  const propsA = useSpring({
    config: { duration: 400 },
    //transform: `scale(1)`,
    opacity: 1,
    from: {
      //transform: `scale(0)`,
      opacity: 0,
    },
  })

  const displayComponent = () => {
    let value = settingList.filter((item) => {
      if (item.active === true) {
        return item.name
      }
    })

    if (value[0].name === "Background") {
      return <Background exit={exit} />
    } else if (value[0].name === "Line") {
      return <ColorPicker exit={exit} />
    } else {
      return null
    }
  }

  const handleSelect = (select) => {
    setSettingList((old) => {
      return old.map((item, i) => ({
        ...item,
        active: item.name === select,
      }))
    })
  }

  useEffect(() => {
    setCurrentColor(line.lineNeg)
  }, [])
  const handleP = (color) => {
    setCurrentColor(color.hex)
    //console.log(color.rgb)
  }
  const handleClose = (item) => {
    setShow(false)
    //console.log(item)
    handleLine(item, currentColor)
  }

  return (
    <animated.div style={propsA}>
      <div className={Styles.modal}>
        <div className={Styles.flex}>
          <div className={Styles.flexItem}>
            <div className={Styles.select}>
              <ul>
                {settingList.map((i) => {
                  return (
                    <li
                      onClick={() => handleSelect(i.name)}
                      style={{ background: i.active ? "#1292ee" : "" }}
                      key={i.name}
                    >
                      {i.name}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          {displayComponent()}
        </div>
        {/* <div className={Styles.bottom}>
          <Button
            className={Styles.setAll}
            textColor="#fff"
            mycolor="#1292ee"
            text="Apply"
          />
          <Button
            className={Styles.setAll}
            textColor="#fff"
            mycolor="#de1f1f"
            text="Discard"
          />
          <Button
            className={Styles.setAll}
            textColor="#fff"
            mycolor="#de1f1f"
            text="Close"
          />
        </div> */}
      </div>
    </animated.div>
  )
}

export default ChartCustom
