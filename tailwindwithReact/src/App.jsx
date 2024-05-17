import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with tailwind</h1>
        <Card username="Hina" img="https://images.pexels.com/photos/22644030/pexels-photo-22644030/free-photo-of-a-woman-sitting-on-a-chair-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" post="Staff engineer" city="Islamad"/>
        <Card username="Hina" img="https://images.pexels.com/photos/22644030/pexels-photo-22644030/free-photo-of-a-woman-sitting-on-a-chair-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" post="Staff engineer" city="Islamad"/>
    </>
  )
}

export default App
