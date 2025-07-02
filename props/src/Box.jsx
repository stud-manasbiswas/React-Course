import React from 'react'
import "./App.css"

function Box({name="MB",profession ="coder"}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{profession}</h2>
    </div>
  )
}

export default Box
