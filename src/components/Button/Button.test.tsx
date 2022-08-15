import '@testing-library/jest-dom'
import Button from '.'
import { render, screen, fireEvent } from '@testing-library/react'

describe('components/Button', () => {
  describe('Button.jsx', () => {

    const handleClick = jest.fn()

    const props = {
      selected: true,
      city: 'Kyiv',
      country: 'Ukraine',
      setCity: handleClick
    }

    it('should be rendered', () => {
      render(<Button {...props} />)
      expect(screen.getByText('KYIV')).toBeInTheDocument()
    })

    it('should not call setCity on click if selected', () => {
      render(<Button {...props} />)
      fireEvent.click(screen.getByText(/KYIV/i))
      expect(handleClick).toHaveBeenCalledTimes(0)
    })

    it('should call setCity on click if not selected', () => {
      const props2 = {
        ...props,
        selected: false
      }
      render(<Button {...props2} />)
      fireEvent.click(screen.getByText(/KYIV/i))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})
