import React, { useState } from "react"
import { useTransition, useSpring, animated } from "react-spring"
import Styles from "../../styles/chartcustom.module.scss"
import DownloadImage from "./downloadComponents/DownloadModule"
import DownloadData from "./downloadComponents/DownloadData"
const Download = ({ handleDownload, exit }) => {
  const [settingList, setSettingList] = useState([
    { name: "Image", active: true },
    { name: "Data", active: false },
    { name: "Save", active: false },
    { name: "Coin", active: false },
    { name: "Time", active: false },
    { name: "Grid", active: false },
  ])

  const displayComponent = () => {
    let value = settingList.filter((item) => {
      if (item.active === true) {
        return item.name
      }
    })

    if (value[0].name === "Image") {
      return <DownloadImage exit={exit} down={handleDownload} />
    } else if (value[0].name === "Data") {
      return <DownloadData exit={exit} />
    } else if (value[0].name === "Line") {
      return <DownloadImage exit={exit} />
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

  const propsA = useSpring({
    config: { duration: 400 },
    //transform: `scale(1)`,
    opacity: 1,
    from: {
      //transform: `scale(0)`,
      opacity: 0,
    },
  })

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
      </div>
    </animated.div>
  )
}

export default Download
