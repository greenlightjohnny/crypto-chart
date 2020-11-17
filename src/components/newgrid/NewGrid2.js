import React from "react"
import Styles from "../../styles/newgrid.module.scss"

const NewGridMap2 = (props) => {
  console.log(props)
  const { coinCurrent, widgetMap } = props.coins
  const oldData = props.layouts
  console.log(coinCurrent, widgetMap)

  return (
    <>
      {/* {props.coins.coinCurrent == false ? (
        <p>Loading...</p>
      ) : (
        <>
          {widgetMap.map((item, index) => {
            return (
              <div key={oldData.lg[index].i} className={Styles.card}>
                {item[0] ? <h4>{item[0]}</h4> : null}

                {item.content.fields.map((i) => {
                  return (
                    <div key={i.title} className={Styles.blurb}>
                      <p>{i.name}</p>
                      <p className={Styles.blurbHigh}>
                        {coinCurrent.mainInfo[i.value]}
                      </p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </>
      )} */}
    </>
  )
}

export default NewGridMap2
