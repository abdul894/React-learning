import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './Contexts'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [ {id: Date.now(), ...todo}, ...prev])
  }

  

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
      <div className='bg-blue-500'>Hello world</div>
    </TodoProvider>
  )
}

export default App
