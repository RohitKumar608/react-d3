import React from 'react'

const Path = ({ d, restProps }) => {
  return <path d={d()} {...restProps} />
}

export default Path
