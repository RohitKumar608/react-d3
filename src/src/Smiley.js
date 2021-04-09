import React from 'react'
import { arc } from 'd3'

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

const eyeBrow = arc()
  .innerRadius(0)
  .outerRadius(40)
  .startAngle(Math.PI / 4)
  .endAngle(Math.PI * 0.3)

const smiley = () => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle
          r={radius - strokeWidth / 2}
          stroke='black'
          strokeWidth={strokeWidth}
          fill='yellow'
        />
        <circle cx={-offsetX} cy={-offsetY} r={eyeCircle} stroke='black' />
        <circle cx={offsetX} cy={-offsetY} r={eyeCircle} stroke='black' />
        <path d={mouth()} />
      </g>
    </svg>
  )
}

export default smiley
