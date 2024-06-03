import { useState } from 'react'
import './App.css'
import { InputBox } from './components/index.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex flex-wrap 
    justify-center items-center bg-gray-800 bg-no-repeat'>
      <h1> Hellow world</h1> 
    </div>
  )
}

export default App
