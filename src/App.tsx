import React from "react"
import { useEffect, useState } from "react"

import Button from "./components/Button"
import WeatherBlock from "./components/WeatherBlock"
import { useLocalStorageState } from "./hooks/hooks"
import { formatResponse, getDay } from "./helpers/helpers"
import { getLatLonUrlByCity, getForecastUrl } from "./api/api"
import { ForecastResponse } from "./interfaces/interfaces"

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

    // if (cityNew && countryNew) {
    //   await fetch(getLatLonUrlByCity(q))
    //     .then((response) => response.json())
    //     .then((data) => {
    //       lat = Math.round(data[0].lat * 10000) / 10000
    //       lon = Math.round(data[0].lon * 10000) / 10000
    //     })
    // }
    // if (lat && lon) {
    //   await fetch(getForecastUrl(lat, lon))
    //     .then((response) => response.json())
    //     .then((data: ForecastResponse) => {
    //       setForecast(formatResponse(data))
    //     })
    // }
    let resp = {
      lat: 12,
      lon: 54,
      current: {
        temp: 27.35,
        weather: [
          {
            id: 804,
            main: "Clouds",
            icon: "01d"
          },
        ],
      },
      daily: [
        {
          temp: {
            day: 29.36,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              icon: "12n"
            },
          ],
        },
        {
          temp: {
            day: 30.22,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
        },
        {
          temp: {
            day: 23.56,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
        },
        {
          temp: {
            day: 18.47,
          },
          weather: [
            {
              id: 502,
              main: "Rain",
              icon: "10d"
            },
          ],
        },
        {
          temp: {
            day: 22.89,
          },
          weather: [
            {
              id: 501,
              main: "Rain",
              description: "moderate rain",
              icon: "10d",
            },
          ],
        },
        {
          temp: {
            day: 25.28,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
        },
        {
          temp: {
            day: 28.12,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
        },
        {
          temp: {
            day: 22.97,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
        },
      ],
    }
    setForecast(formatResponse(resp))
  }

  useEffect(() => {
    getCityForecast(city, country)
  }, [])

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
          {[
            { big: true, day: 0 },
            { big: false, day: 1 },
            { big: false, day: 2 },
            { big: false, day: 3 },
            { big: false, day: 4 },
          ].map(({ big, day }) => (
            <WeatherBlock
              key={day}
              big={big}
              day={getDay(day)}
              forecast={forecast}
              dayShift={day}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
