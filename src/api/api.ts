/* eslint-disable import/no-anonymous-default-export */

const baseURL = 'https://api.openweathermap.org'
const appid = '6bd01b54787d2cd00136d465f7bae07e'

const getLatLonUrlByCity = (q: string): string => `${baseURL}/geo/1.0/direct?q=${q}&appid=${appid}`

const getForecastUrlByLatLon = (lat: string, lon: string, days: number = 5): string => (
  `${baseURL}/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${days}&appid=${appid}`
)

const getForecastUrl = (lat: number, lon: number): string => (
  `${baseURL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${appid}`
)

const getImgUrl = (icon:string):string => `http://openweathermap.org/img/wn/${icon}@2x.png`

export {
  getLatLonUrlByCity,
  getForecastUrlByLatLon,
  getForecastUrl,
  getImgUrl,
}
