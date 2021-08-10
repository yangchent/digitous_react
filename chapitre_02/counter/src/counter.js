import React from "react";
import "./App.css";



const  Counter = (props) => {

        return(
            <div class= "container">
                <button onClick={props.subtractFunction}  >-</button>
                <h2>{props.count}</h2>
                <button onClick={props.addFunction}  >+</button>
            </div>
        )
    }

export default Counter;