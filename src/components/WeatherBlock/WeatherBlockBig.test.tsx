import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { WeatherBlockBig } from '.'

describe('components/WeatherBlockBig', () => {
  describe('WeatherBlockBig.jsx', () => {
    const props = {
      forecast: {
        current: {
          icon: "01d",
          temp: 27,
          weather: "Clouds",
        },
        daily: [],
      }
    }

    it('should be rendered', () => {
      render(<WeatherBlockBig {...props} />)
      expect(screen.getByText('Today')).toBeInTheDocument()
    })
  })
})
