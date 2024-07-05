import { FC } from 'react'
import './Button.scss'

interface IButton {
    className: string,
    text: string
}

const Button: FC<IButton> = ({className, text}) => {
  return (
    <button className={className}>{text}</button>
  )
}

export default Button