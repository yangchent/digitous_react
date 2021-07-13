import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
            this.state = {
                count : 0,
            };
    }
    count= ()=> {
        this.setState({
            count: this.state.count - 1,
            });
    }
    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onclick ={this.count} style= {{backgroundColor:"green"}}>-</button>
                <button 
                    onClick={()=>  {
                        this.setState({
                    count: this.state.count+ 1,
                    });
                }}
                style= {{backgroundColor:"red"}}>+</button>
            </div>
        )
    }
}
export default Counter;