import React from 'react'

const Circle = ({ offsetX, offsetY, eyeCircle, stroke, ...restProps }) => {
  return (
    <circle
      cx={offsetX}
      cy={-offsetY}
      r={eyeCircle}
      stroke={stroke}
      {...restProps}
    />
  )
}

export default Circle
