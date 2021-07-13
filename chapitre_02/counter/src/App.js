import React from "react";


class App extends React.Component {
  constructor(){
    super();
  
    this.state = {
      count : 0,
    };
  }
  render() {
    return(
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button 
        onClick={()=>  {
          this.setState({
            count: this.state.count - 1,
            });
          }}
          style= {{backgroundColor:"green"}}>-</button>
        <button 
        onClick={()=>  {
          this.setState({
            count: this.state.count+ 1,
            });
          }}style= {{backgroundColor:"red"}}>+</button>

      </div>
    )
  }
}
export default App;