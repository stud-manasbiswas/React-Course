import React, { useContext } from 'react'
import { story } from './Context/story'

function Card() {
  let d =  useContext(story)
  return (
    <div>
      <h1> story : {d} </h1>
    </div>
  )
}

export default Card
