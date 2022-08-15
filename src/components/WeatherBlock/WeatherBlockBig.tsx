import cx from "classnames"
import React from "react"
import { getImgUrl } from "../../api/api"
import { ForecastData } from "../../interfaces/interfaces"

import "./WeatherBlock.scss"

interface ownProps {
  forecast: ForecastData
}

const TODAY = "Today"

const WeatherBlock: React.FC<ownProps> = ({
  forecast,
}: ownProps): JSX.Element => {
  const { temp, weather, icon } = forecast.current

  return (
    <div className={cx("container", "container--big")}>
      <div className='today'>{TODAY}</div>
      <div className='todayData'>
        <div className='iconBig'>
          <img src={getImgUrl(icon)} alt='' />
        </div>
        <div className='tempConditions'>
          <div className='tempBig'>{temp + '°'}</div>
          <div className='conditions'>{weather}</div>
        </div>
      </div>
    </div>
  )
}

export default WeatherBlock
