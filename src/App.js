import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Route } from "react-router-dom"
import Info from "./pages/Info"
import Summary from "./pages/home"
import Layout from "./layouts/layout"

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Rout exact path="/" component={Summary} />
          <Rout exact path="/info" component={Info} />
        </BrowserRouter>
      </Layout>
    </div>
  )
}

export default App
