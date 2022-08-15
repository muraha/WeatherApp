import cx from "classnames"
import React from "react"
import { ForecastData } from "../../interfaces/interfaces"
import { getImgUrl } from "../../api/api"

import "./WeatherBlock.scss"

interface ownProps {
  day: string
  dayShift: number
  forecast: ForecastData
}

const WeatherBlock: React.FC<ownProps> = ({
  day,
  dayShift,
  forecast,
}: ownProps): JSX.Element => {
  const { temp, icon } = forecast.daily[dayShift]

  return (
    <div className={cx("container", "container--small")}>
      <div className='day'>{day}</div>
      <div className='icon'>
        <img src={getImgUrl(icon)} alt='' />
      </div>
      <div className='temp'>{temp + "°"}</div>
    </div>
  )
}

export default WeatherBlock
