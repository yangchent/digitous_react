import React from "react";
import "./App.css";
class Counter extends React.Component{
    
    render(){
        return(
            <div class= "container">
                <button onClick={this.props.subtractFunction}  >-</button>
                <h2>{this.props.count}</h2>
                <button onClick={this.props.addFunction}  >+</button>
            </div>
        )
    }
}

export default Counter;