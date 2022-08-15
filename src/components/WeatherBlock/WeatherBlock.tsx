import React from 'react'
import { ForecastData } from '../../interfaces/interfaces'
import { getImgUrl } from '../../api/api'
import cx from 'classnames'

import './WeatherBlock.scss'

interface ownProps {
  big?: boolean
  day: string
  dayShift: number
  forecast: ForecastData
}

const WeatherBlock: React.FC<ownProps> = ({ big, day, dayShift, forecast }: ownProps): JSX.Element => {
  const { temp, icon } = forecast.daily[dayShift]

  return <div className="container">
    <div className="day">{day}</div>
    <div className="icon">
      <img src={getImgUrl(icon)} alt="" />
    </div>
    <div className="temp">{temp + '°'}</div>
  </div>
}

export default WeatherBlock
