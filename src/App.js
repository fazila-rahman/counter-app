import React, { useState } from "react";

import ActionButton from "./components/ActionButton";

function App() {
  const [counter, setCount] = useState(0);
  
  let incrementCounter = () => {
    setCount(counter + 1);
  };

  let decrementCounter = () => {
    setCount(counter - 1);
  };

  let resetCounter = () => {
    setCount(0);
  }
  
  return (
    <div className="main__wrap">
      <div className="App-header">
        <h1 className="app-title"> Counter Example </h1>
        <p className="card__box"><h3>Points Count: </h3><h2>{counter}</h2></p>
        <div className="buttons-div">
          <ActionButton title={"Increment"} action={incrementCounter} />
          <ActionButton title={"Reset"} action={resetCounter} />
          <ActionButton title={"Decrement"} action={decrementCounter} />
        </div>
      </div>
      </div>  
  );
}

export default App;