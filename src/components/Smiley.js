import React from 'react'
import { arc } from 'd3'
import Path from '../common/Path'
import Circle from '../common/Circle'
import Svg from '../common/Svg'

const width = 460
const height = 460
const centerX = height / 2
const centerY = width / 2
const radius = 120
const eyeCircle = 20
const offsetX = 40
const offsetY = 45
const strokeWidth = 10

const mouth = arc()
  .innerRadius(60)
  .outerRadius(80)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 1.5)

const smiley = () => {
  return (
    <Svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <Circle
          r={radius - strokeWidth / 2}
          stroke='black'
          strokeWidth={strokeWidth}
          fill='yellow'
        />
        <Circle cx={-offsetX} cy={-offsetY} r={eyeCircle} stroke='black' />
        <Circle cx={offsetX} cy={-offsetY} r={eyeCircle} stroke='black' />
        <Path d={mouth} />
      </g>
    </Svg>
  )
}

export default smiley
