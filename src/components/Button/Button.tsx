import React from 'react'
import cx from 'classnames'

import './Button.scss'

interface ownProps {
  selected?: boolean
  city: string
  country: string
  setCity: (city:string, country:string) => any
}

export const Button: React.FC<ownProps> = ({ selected, city, country, setCity }: ownProps): JSX.Element => {

  return (
    <button
      className={cx('button', selected && 'button-selected')}
      onClick={() => !selected && setCity(city, country)}
    >
      {city.toUpperCase()}
    </button>
  )
}

export default Button
