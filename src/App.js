import "./App.css"
import { BrowserRouter, Route } from "react-router-dom"
import Info from "./pages/Info"
import Summary from "./pages/home"
import Layout from "./layouts/layout"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Summary} />
          <Route exact path="/info" component={Info} />
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
