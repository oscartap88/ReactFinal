import React from 'react'

const Button = ({txtBtn , handleClick}) => {
  return (
    <Button onClick={handleClick}>{txtBtn}</Button>
  )
}

export default Button