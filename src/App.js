import "./App.css"
import { BrowserRouter, Route } from "react-router-dom"
import Info from "./pages/Info"
import Summary from "./pages/home"
import CoinInfo from "./pages/CoinInfo"
import About from "./pages/About"
import Layout from "./layouts/layout"
import Landing from "./components/Landing"
import { CurrencyContextProvider } from "./context/currencyContext"

function App() {
  return (
    <div className="App">
      <CurrencyContextProvider>
        <BrowserRouter>
          <Layout>
            <Route exact path="/" component={Summary} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/coins/:name" component={CoinInfo} />
          </Layout>
        </BrowserRouter>
      </CurrencyContextProvider>
    </div>
  )
}

export default App
