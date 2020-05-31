import React from "react"
import "./App.scss"
import Header from "./Components/Header/Header"
import MainPage from "./Pages/MainPage/MainPage"
import Footer from "./Components/Footer/Footer"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./Redux/index"

const store = createStore(
  rootReducer,
  composeWithDevTools({ trace: true, traceLimit: 25 })
  )
)

// const store = observable({
//   example: 0,
// })

// sagaMiddleware.run(eventsSaga)

const App: React.FC = () => (
  <div className={"wrapper"}>
    <Header />
    <main className={"main"}>
      <MainPage />
    </main>
    <Footer />
  </div>
)

export default App
