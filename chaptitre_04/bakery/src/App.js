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

      addItem=(name,price) => {
    let newItem = this.state.items
    newItem.push(name,price)
    this.setState({items: newItem })
  }
    toAdd=()=> {
      this.setState((prevState) => {
        return {
          ...prevState,
          activeTab: "add"
        };
      });
    }
      toList=()=> {
        this.setState((prevState) => {
          return {
            ...prevState,
            activeTab: "cart"
          };
        });
      }
      toPay =()=>{
        this.setState((prevState) => {
        return {
          ...prevState,
          activeTab: "pay"
        };
      });
    }
  render(){
    return (<div>
      <Button onClick={this.toAdd} isSelected={this.state.activeTab==="add"} children="Add" />
      <Button onClick={this.toList} isSelected={this.state.activeTab==="List"} children="Cart" />
      <Button onClick={this.toPay} isSelected={this.state.activeTab==="Pay"} children="Pay" />
    </div>
    )
  }
}

export default App;
