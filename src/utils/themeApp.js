import React, { useState, useEffect, createContext } from "react"

import "../App.scss"

const lightTheme = {
  "--color-text": "#994cc3",
  "--color-bg": "#f0f0f0",
  "--color-primary": "#EF5350",
  "--color-secondary": "#0c969b",
  "--color-header-bg": "rgba(255, 255, 255, 0.9)",
  "--color-neon-fill": "#ef5350",
  "--color-neon-glow": "rgba(255, 255, 255, 0)",
}
const darkTheme = {
  "--color-text": "#82AAFF",
  "--color-bg": "#011627",
  "--color-primary": "#c792ea",
  "--color-secondary": "#7fdbca",
  "--color-header-bg": "rgba(1, 10, 18, 0.9)",
  "--color-neon-fill": "#FFFEFC",
  "--color-neon-glow": "#d99fff",
}

export const ModeContext = createContext("light")

export default function Layout({ children }) {
  const [currentMode, setCurrentMode] = useState("light")
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const theme = currentMode === "light" ? lightTheme : darkTheme
    Object.keys(theme).forEach((key) => {
      const value = theme[key]
      document.documentElement.style.setProperty(key, value)
    })
  }, [currentMode])

  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      setCurrentMode("dark")
      setIsChecked(true)
    }
  }, [])

  const toggleTheme = () => {
    const newMode = currentMode === "light" ? "dark" : "light"
    setIsChecked(!isChecked)
    setCurrentMode(newMode)
    localStorage.setItem("mode", newMode)
  }

  return (
    <>
      <ModeContext.Provider value={currentMode}>
        <Header toggleTheme={toggleTheme} isChecked={isChecked} />
        <main>{children}</main>
      </ModeContext.Provider>
    </>
  )
}
