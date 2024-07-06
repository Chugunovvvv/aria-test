import { FC } from 'react'
import './GetAppItem.scss'

interface IGetAppItem {
    text: string
    app: string
    img: string,
    alt: string
    href: string
}

const GetAppItem: FC<IGetAppItem> = ({text, app, img, alt, href}) => {
  return (
    
      <a href={href} target='_blank' className="app__list-link">
        <img className="app__list-img" src={img} alt={alt}/>
        <div className="app__list-info">
            <span className="app__list-text">{text}</span>
            <span className='app__list-app'>{app}</span>
        </div>
      
      
      </a>
    
  )
}

export default GetAppItem