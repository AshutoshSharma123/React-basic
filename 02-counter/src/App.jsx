
import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)


  const addValue = () => {

    setCounter((previousCounter) => previousCounter + 1)
    setCounter((previousCounter) => previousCounter + 2)
    setCounter((previousCounter) => previousCounter + 1)
    setCounter((previousCounter) => previousCounter + 1)


  }
  const removevalue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React with Ashutosh Sharma</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}> Add value</button>
      <button onClick={removevalue}>Remove value</button>
      <p>footer:{counter}</p>
    </>
  )

}

export default App
