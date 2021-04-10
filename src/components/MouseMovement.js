import React, { useState, useCallback } from 'react'
import Circle from '../common/Circle'
import Svg from '../common/Svg'

const width = 1400
const height = 1000

const MouseMovement = () => {
  const [mousePosition, setMousePosition] = useState({
    x: height / 2,
    y: width / 2,
  })
  const handleMousePosition = useCallback(
    (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    },
    [setMousePosition]
  )
  return (
    <Svg width={width} height={height} onMouseMove={handleMousePosition}>
      <Circle cx={mousePosition.x} cy={mousePosition.y} r={30} stroke='black' />
    </Svg>
  )
}

export default MouseMovement
