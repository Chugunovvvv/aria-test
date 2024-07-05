import { FC } from 'react'
import './GetAppItem.scss'

interface IGetAppItem {
    text: string
    app: string
    img: string,
    alt: string
}

const GetAppItem: FC<IGetAppItem> = ({text, app, img, alt}) => {
  return (
    <li className='app__list-item'>
        <img className="app__list-img" src={img} alt={alt}/>
        <div className="app__list-info">
            <span className="app__list-text">{text}</span>
            <span className='app__list-app'>{app}</span>
        </div>
    </li>
  )
}

export default GetAppItem