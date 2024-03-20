import "./App.css";
import React from "react";
import { useState } from "react";


function App() {

const [counter,setCounter]=useState(0)
const [less,setLesser]=useState(counter)


const addValue = () =>{
setCounter(counter+1)
}

const removeValue = () =>{

  setLesser(counter-1)
  
  
}
  return (
    <>
      {/* <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button>Remove Value</button> */}



      <h1>Chai aur React</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}>Add value :{counter}</button>
      <br />
      <button onClick={removeValue}> Remove Value : {less}</button>
      <footer>Counted:{counter}</footer>
      <footer>Removed:{less}</footer>
    </>
  );
}

export default App;
