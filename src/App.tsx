import React from "react"
import "./App.scss"
import Header from "./Components/Header/Header"
import MainPage from "./Pages/MainPage/MainPage"
import Footer from "./Components/Footer/Footer"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./Redux/index"

const store = createStore(
  rootReducer,
  composeWithDevTools({ trace: true, traceLimit: 25 })(applyMiddleware())
)

const App: React.FC = () => (
  <Provider store={store}>
    <div className={"wrapper"}>
      <Header />
      <main className={"main"}>
        <MainPage />
      </main>
      <Footer />
    </div>
  </Provider>
)

export default App
