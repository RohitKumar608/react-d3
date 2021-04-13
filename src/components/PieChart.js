import React, { useState, useEffect } from 'react'
import { csv, arc, pie } from 'd3'
import Svg from '../common/Svg'

const csvUrl =
  'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv'

const width = 960
const height = 500
const centerX = width / 2
const centerY = height / 2

const pieArc = arc().innerRadius(0).outerRadius(width)

const PieChart = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    csv(csvUrl).then(setData)
  }, [])
  const colorPie = pie().value(1)

  return (
    <div style={{ margin: '2rem' }}>
      <Svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          {colorPie(data).map((d, idx) => (
            <path fill={d.data['RGB hex value']} d={pieArc(d)} />
          ))}
        </g>
      </Svg>
    </div>
  )
}

export default PieChart
