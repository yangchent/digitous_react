import React from "react";

class Counter extends React.Component{
    constructor () {
        super();
          this.state = {
            count: 0,
          }}
    render(){
        return(
            <div>
                <h2>{this.props.count}</h2>

                <button onClick={this.props.subtractFunction} style={{backgroundColor: "green"}} >-</button>
                <button onClick={this.props.addFunction} style={{backgroundColor: "red"}} >+</button>
            </div>
        )
    }
}
export default Counter;