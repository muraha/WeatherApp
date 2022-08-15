import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock("./components/Button", () => () => <div>Button</div>)

describe('App.tsx', () => {
  it('should be rendered', () => {
    render(<App />)
    expect(screen.getByTestId('weatherApp')).toBeInTheDocument()
    expect(screen.getAllByText('Button')).toBeDefined()
  })
})
