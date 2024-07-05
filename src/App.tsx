import { FC } from "react"
import './styles/global.scss'
import Header from "./components/Header/Header"
import Stats from "./components/Stats/Stats"
import Button from "./components/UI/Button/Button"
import GetApp from "./components/GetApp/GetApp"
import Reviews from "./components/Reviews/Reviews"

const App: FC = () => {
  return (
    <div className="wrapper">
      <div className="content-left">
        <Header/>
        <Stats/>
        <div className="button-wrap">
        <Button text='Join Whatsapp' className="button"/>
        </div>
        <GetApp/>
      </div>
      <div className="content-right">
        <Reviews/>
      </div>
    </div>
  )
}

export default App