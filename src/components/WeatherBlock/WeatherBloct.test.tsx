import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { WeatherBlock } from '.'

describe('components/WeatherBlockBig', () => {
  describe('WeatherBlockBig.jsx', () => {
    const props = {
      forecast: {
        current: {
          icon: "01d",
          temp: 27,
          weather: "Clouds",
        },
        daily: [{
          icon: "12n",
          temp: 29,
          weather: "Clouds",
        }, {
          icon: "10d",
          temp: 30,
          weather: "Rain",
        },
        ],
      },
      dayShift: 1,
      day: 'Mon'
    }

    it('should be rendered', () => {
      render(<WeatherBlock {...props} />)
      expect(screen.getByText('Mon')).toBeInTheDocument()
    })
  })
})
