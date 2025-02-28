import { useState } from 'react'
import Header from "./componentes/Header"
import Hero from "./componentes/Hero"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default App
