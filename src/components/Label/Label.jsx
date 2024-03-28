import React from 'react'

const Label = ({className, title}) => {
  return (
    <label className={className}>
    {title}
  </label>
  )
}

export default Label