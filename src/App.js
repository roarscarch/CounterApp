
import './App.css';
import { useState } from 'react';
function App() {
  function increaseCounter() {
    setCounter(counter+1);
  }
  function decreaseCounter() {
    setCounter(counter-1);
  }
  
  let [counter,setCounter] = useState(0);
  console.log("anurage");
  return (
    <div className="App">
      <button onClick={increaseCounter}>+</button>
      <span>{counter}</span>
      <button onClick={decreaseCounter}>-</button>
     
      
    </div>
  );
}

export default App;
