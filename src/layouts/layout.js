import React from "react"
import Header from "../components/Header"
import Footer from ".,/components/Footer"
function layout(props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default layout
