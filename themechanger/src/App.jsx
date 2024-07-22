import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeBtn />
      <Card />
    </>
  )
}

export default App
