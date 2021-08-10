import React, { useState } from "react";

import Counter from "./Counter";
import "./App.css";

const App = () => {
   const [count, setCount] = useState(0);
    

   const addFunction=()=> {
    setCount( count+1)
  }
  const subtractFunction=()=> {
    if(count >0 ) {
      setCount( count-1)
    }}

    return<div>
        <h1>Counter</h1>
        <Counter count={count} addFunction={addFunction} subtractFunction = {subtractFunction}
        />
      </div>
  
  }

export default App;