import {FC} from 'react'
import { apps } from '../../utils/app'
import GetAppItem from './GetAppItem/GetAppItem'
import './GetApp.scss'

const GetApp: FC = () => {
  return (
    <section className="app">
        <ul className="app_list">
            {apps.map((app) => <GetAppItem img={app.img} alt={app.alt} text={app.text} app={app.app} key={app.id}/>)}
        </ul>
    </section>
  )
}

export default GetApp