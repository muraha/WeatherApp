import { ForecastResponse, ForecastData, DailyData } from '../interfaces/interfaces'

export const formatResponse = (response: ForecastResponse | null): ForecastData | null => {
  if (!response) return null
  const { current, daily } = response

  const currentRes = {
    temp: Math.round(current.temp),
    weather: current.weather[0].main,
    icon: current.weather[0].icon
  }

  const dailyRes = daily.map((d:DailyData) => ({
    temp: Math.round(d.temp.day),
    weather: d.weather[0].main,
    icon: d.weather[0].icon
  }))

  return {
    current: currentRes,
    daily: dailyRes
  }
}

export const toTextFromDay = (day: number): string => ({
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
    0: 'Sun'
  }[day] || '')

export const getDay = (dayShift: number = 0): string => {
  const date = new Date()
  const today = date.getDay()
  const day = (today + dayShift) % 7
  return toTextFromDay(day)
}
