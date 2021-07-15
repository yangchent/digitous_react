import React from "react";
import Counter from "./Counter";
import "./App.css";

class App extends React.Component {
  constructor () {
    super();
      this.state = {
        count: 0,
      }
  };
   addFunction=()=> {
    this.setState({
      count: this.state.count + 1
    })
  }
  subtractFunction=()=> {
    if(this.state.count >0 ) {
      this.setState({
        count: this.state.count-1
      })
    }}
  render() {
    return(
      <div>
        <h1>Counter</h1>
        <Counter count={this.state.count} addFunction={this.addFunction} subtractFunction = {this.subtractFunction}
        />
      </div>
    )
  }
}
export default App;