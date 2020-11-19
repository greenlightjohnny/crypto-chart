import React, { useState, useContext } from "react"
import Styles from "../../styles/chart.module.scss"

const GetDays = ({ handleTime, text }) => {
  //   const { handleTime } = useContext()
  const [buttonList, setButtonList] = useState([
    { time: 1, text: "1D" },
    { time: 7, text: "1W" },
    { time: 30, text: "1M" },
    { time: 180, text: "6M" },
    { time: 365, text: "1Y" },
    { time: 999, text: "Submit" },
  ])
  const { daysLength, setDaysLength } = useState("24")
  const [customValue, setCustomValue] = useState("")

  const handleChange = (e) => {
    setCustomValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let tak = { time: customValue, text: "Submit" }
    handleTime(tak)
  }

  return (
    <div className={Styles.setDays}>
      {buttonList.map((i) => {
        if (i.text === "Submit") {
          return (
            <form
              key={i.text}
              className={Styles.custom}
              onSubmit={handleSubmit}
            >
              <label htmlFor="custom"></label>
              <input
                className={
                  text === i.text ? Styles.inputActive : Styles.inputSilent
                }
                name="custom"
                type="text"
                placeholder="Days"
                value={customValue}
                onChange={handleChange}
              />

              <button
                className={text === i.text ? Styles.active : ""}
                type="submit"
              >
                Submit
              </button>
            </form>
          )
        } else {
          return (
            <button
              key={i.text}
              className={text === i.text ? Styles.active : ""}
              onClick={() => handleTime(i)}
            >
              {i.text}
            </button>
          )
        }
      })}
    </div>
  )
}

export default GetDays

{
  /* <form className={Styles.custom} onSubmit={handleSubmit}>
          <label for="custom"></label>
          <input
            name="custom"
            type="text"
            placeholder="Days"
            value={customValue}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form> */
}
{
  /* <button onClick={() => handleTime(1)}>24H</button>
        <button onClick={() => handleTime(7)}>1W</button>
        <button onClick={() => handleTime(30)}>1M</button>
        <button onClick={() => handleTime(180)}>6M</button>
        <button onClick={() => handleTime(365)}>1Y</button> */
}
