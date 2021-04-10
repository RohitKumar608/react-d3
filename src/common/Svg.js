import React from 'react'

const Svg = ({ width, height, children, ...restProps }) => {
  return (
    <svg width={width} height={height} {...restProps}>
      {children}
    </svg>
  )
}

export default Svg
