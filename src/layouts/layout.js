import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Styles from "../styles/layout.module.scss"
function layout(props) {
  return (
    <section className={Styles.main}>
      <Header />
      <div className={Styles.content}>{props.children}</div>
      <Footer />
    </section>
  )
}

export default layout
