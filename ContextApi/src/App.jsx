
import { useContext } from 'react'
import './App.css'
import { data } from './Context/UserContext'
import Card from './Card'

function App() {
let tutorName = useContext(data)


  return (
    <>
      <h1>Manas Biswas</h1>
      <h2>Is a newbie Web developer</h2>
      <h2>he is learning things quick and surely will make it some day</h2>
      <h2>his tutor is {tutorName}</h2>

      <br />

      <Card/>
      
    </>
  )
}

export default App
