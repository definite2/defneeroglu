import React from 'react'
import { m } from 'framer-motion'

const containerStyle = {
  display: 'flex',
  margin:'10% auto',
  justifyContent: 'center',
  alignItems: 'center',
  width: '3.5rem',
  height: '3.5rem',
  boxSizing: 'border-box',
}

const circleStyle = {
  display: 'block',
  width: '3.5rem',
  height: '3.5rem',
  border: '4px solid #d1d1d1',
  borderTop: '4px solid #84CC16',
  borderRadius: '50%',
  boxSizing: 'border-box',
}

const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1,
}

export default function CircleLoader() {
  return (
    <div style={containerStyle}>
      <m.span style={circleStyle} animate={{ rotate: 360 }} transition={spinTransition} />
    </div>
  )
}
