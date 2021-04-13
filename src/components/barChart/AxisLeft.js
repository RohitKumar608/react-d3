export const AxisLeft = ({ yScale }) =>
  yScale.domain().map((tickValue, idx) => (
    <g key={idx} className='tick'>
      <text
        key={tickValue}
        style={{ textAnchor: 'end' }}
        x={-8}
        dy='.32em'
        y={yScale(tickValue) + yScale.bandwidth() / 2}
      >
        {tickValue}
      </text>
    </g>
  ))
