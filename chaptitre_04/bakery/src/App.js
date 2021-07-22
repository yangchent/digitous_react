import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import Button from './components/Button';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      activeTab : "add",
      items : [],
      }
      }
      toAdd=()=>{
        this.setState({activeTab : "Add"})
        this.state.value==this.state.activeTab? <Add />:
         
      }
      toList=()=>{
        this.setState({activeTab : "List"})
      }
      toPay =()=>{
        this.setState({activeTab : "Pay"})
      }
  render(){
    return <div>
      <Button onClick={this.toAdd} isSelected={this.state.activeTab==="add"}>Add  </Button>
      <Button onClick={this.toList} isSelected={this.state.activeTab==="List"}>List</Button>
      <Button onClick={this.toPay} isSelected={this.state.activeTab==="Pay"}>Pay</Button>
    </div>

    
  }
}

export default App;
