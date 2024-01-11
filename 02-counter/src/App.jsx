
import './App.css'

function App() {
  let counter = 15

  const addValue = () => {
    counter += 1
    console.log(counter)
  }

  return (
    <>
      <h1>React with Ashutosh Sharma</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}> Add value</button>
      <button>Remove value</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
