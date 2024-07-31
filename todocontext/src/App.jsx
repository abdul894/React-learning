import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './Contexts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoProvider>
      <div className='bg-blue-500'>Hello world</div>
    </TodoProvider>
  )
}

export default App
