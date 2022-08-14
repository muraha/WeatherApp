import React from 'react'
import { ForecastData } from '../../interfaces/interfaces'

interface ownProps {
  big?: boolean
  day: string
  dayShift: number
  forecast: ForecastData
}

const WeatherBlock: React.FC<ownProps> = ({ big, day, dayShift, forecast }: ownProps): JSX.Element => {
  let temp, conditions, icon

  if (big) {
    temp = forecast.current.temp
    conditions = forecast.current.weather
    icon = forecast.current.icon
  } else {
    temp = forecast.daily[dayShift].temp
    conditions = forecast.daily[dayShift].weather
    icon = forecast.daily[dayShift].icon
  }

  return <div className="container">
    <div className="flexWrapper">
      <div className="day">{day}</div>
      <div className="icon">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      </div>
      <div className="temp">{temp}</div>
      {big && <div className="conditions">{conditions}</div>}
    </div>
  </div>
}

export default WeatherBlock
