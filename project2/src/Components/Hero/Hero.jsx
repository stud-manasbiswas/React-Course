import React from 'react'
import "./Hero.css"
import Card from '../Card/Card'
import bmw from "../../assets/bmw.jpg"
import lambo from "../../assets/lambo.jpg"
import suzuki from "../../assets/suzuki.jpg"
function Hero() {
  return (
    <div className='hero'>
      <Card name="Bmw" price="1.9cr" image={bmw}/>
      <Card name="lambo" price="5.9cr" image={lambo}/>
      <Card name="suzuki" price="10L" image={suzuki}/>
     
      
    </div>
  )
}

export default Hero
