import { FC } from "react"
import './Stats.scss'
import { stats } from "../../utils/stats"
import StatsItem from "./StatsItem/StatsItem"

const Stats: FC = () => {
  return (
    <section className="stats">
        <ul className="stats__list">
            {stats.map((stat) => <StatsItem statsCount={stat.statsCount} statsInfo={stat.statsInfo} key={stat.id}/>)}
        </ul>
    </section>
  )
}

export default Stats