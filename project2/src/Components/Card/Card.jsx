import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className='card'>
      <img src={props.image} alt="" />
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
    </div>
  )
}

export default Card
