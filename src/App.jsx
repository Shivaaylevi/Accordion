import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'

function App() {
  const [count, setCount] = useState()

  return (
    <Accordion/>
  )
}

export default App
