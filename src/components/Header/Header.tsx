import { FC } from "react"
import './Header.scss'

const Header: FC = () => {
  return (
    <header className="header">
        <h1 className="header__title">Do you want to Learn more About cryptocurrencies <span>quickly and easily ?</span></h1>
        <p className="header__subtitle">Subscribe to our channel to learn more</p>
    </header>
  )
}

export default Header