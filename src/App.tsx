import React from "react"
import "./App.scss"
import Header from "./Components/Header/Header"
import MainPage from "./Pages/MainPage/MainPage"
import Footer from "./Components/Footer/Footer"
// import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
// import createSagaMiddleware from "redux-saga"
import thunk from "redux-thunk"
import rootReducer from "./Redux/index"
import eventsSaga from "./Redux/store/events/events.sagas"
import StaticItem from "./Landing/StaticPast/StaticPast"
import DinamicItem from "./Landing/DinamicPast/DinamicPast"
import { observable } from "mobx"
import { observer, Provider } from "mobx-react"

// const sagaMiddleware = createSagaMiddleware()

// const store = createStore(
//   rootReducer,
//   composeWithDevTools({ trace: true, traceLimit: 25 })(
//     applyMiddleware(thunk)
//   )
// )

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
