import React from "react"
import { useEffect, useState } from "react"

import Button from "./components/Button"
import { WeatherBlock, WeatherBlockBig} from "./components/WeatherBlock"
import { useLocalStorageState } from "./hooks/hooks"
import { formatResponse, getDay } from "./helpers/helpers"
import { getLatLonUrlByCity, getForecastUrl } from "./api/api"
import { ForecastResponse } from "./interfaces/interfaces"

import "./App.scss"

function App() {
  const [city, setCity] = useLocalStorageState("city", "ottawa")
  const [country, setCountry] = useLocalStorageState("country", "canada")
  const [forecast, setForecast] = useState<any>(null)

  const getCityForecast = async (cityNew: string, countryNew: string) => {
    setCity(cityNew.toLowerCase())
    setCountry(countryNew.toLowerCase())

    const q = `${cityNew},${countryNew}`
    let lat = 0
    let lon = 0

    if (cityNew && countryNew) {
      await fetch(getLatLonUrlByCity(q))
        .then((response) => response.json())
        .then((data) => {
          lat = Math.round(data[0].lat * 10000) / 10000
          lon = Math.round(data[0].lon * 10000) / 10000
        })
    }
    if (lat && lon) {
      await fetch(getForecastUrl(lat, lon))
        .then((response) => response.json())
        .then((data: ForecastResponse) => {
          setForecast(formatResponse(data))
        })
    }
  }

  useEffect(() => {
    getCityForecast(city, country)
  }, []) // eslint-disable-line

  return (
    <div className='App'>
      <div className='buttonsContainer'>
        <Button
          city={"Ottawa"}
          country={"canada"}
          setCity={getCityForecast}
          selected={city === "ottawa"}
        />
        <Button
          city={"Kyiv"}
          country={"ukraine"}
          setCity={getCityForecast}
          selected={city === "kyiv"}
        />
        <Button
          city={"Tokyo"}
          country={"japan"}
          setCity={getCityForecast}
          selected={city === "tokyo"}
        />
      </div>
      {forecast && (
        <div className='weatherContainer'>
          <div className='todayWrapper'>
            <WeatherBlockBig forecast={forecast}
            />
          </div>
          <div className='restDayWrapper'>
            {[{ day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }].map(({ day }) => (
              <WeatherBlock
                key={day}
                day={getDay(day)}
                forecast={forecast}
                dayShift={day}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
