import { FC } from 'react'
import './StatsItem.scss'

interface IStatsItem {
    statsInfo: string,
    statsCount: string
}

const StatsItem: FC<IStatsItem> = ({statsInfo, statsCount}) => {
  return (
    <li className='stats__list-item'>
        <h2 className="stats__list-count">
            {statsCount}
        </h2>
        <p className="stats__list-info">
            {statsInfo}
        </p>
    </li>
  )
}

export default StatsItem