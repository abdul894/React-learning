import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setcounter] = useState(1);

  const addValue = () => {
    setcounter(counter + 1);
    console.log(counter);
  }

  const removeValue = () => {
    setcounter(counter - 1);
    console.log(counter);
  }
  
  return (
    <>
      <h1>Learning React</h1>
      <h2>counter: {counter}</h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
