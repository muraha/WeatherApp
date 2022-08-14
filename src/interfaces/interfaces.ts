interface CurrentData {
  temp: number,
  weather: WeatherData[]
}

interface WeatherData {
  main: string
  icon: string
}

export interface DailyData {
  temp: { day: number }
  weather: WeatherData[]
}

export interface ForecastResponse {
  lat: number
  lon: number
  current: CurrentData
  daily: DailyData[]
}

interface DayData {
  temp: number
  weather: string
  icon: string
}

export interface ForecastData {
  current: DayData
  daily: DayData[]
}
