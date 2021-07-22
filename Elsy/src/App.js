// chemin qui commence sans ./ -> une librairie
import React from "react";
// Global CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/global.css";
// Components
import Box from "./components/Box";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        water : 0,
        heart : 120,
        temperature : -10,
        steps : 3000
    }
    
  }
  onHeartChange=(e)=>{
    this.setState((prevState) => {
      return{
        ...prevState,
        heart : e.target.value,
        water :this.calculateWater(prevState, e.target.value)
      } 
    });
  }
  onHeatChange=(e)=>{
    this.setState((prevState) => {
      return{
        ...prevState,
        temperature : e.target.value ,
        water :this.calculateWater(prevState, e.target.value)
    }
  })
  }
  onDirectionChange=(e)=>{
    this.setState((prevState) => {
      return{
        ...prevState,
        steps : e.target.value ,
        water :this.calculateWater(prevState, e.target.value)
      }
    })
  }
  calculateWater = (newState)=> {
    let water1=0
    let water2=0
    let water3=0
    if(this.state.temperature > 20){
      water1 = .02*(this.state.temperature -20)
    }
   else if(this.state.heart >120){
    water2 = 0.0008*(this.state.heart -120)
    }
    else if (this.state.steps >10000){
      water3 = 0.00002*(this.state.steps-10000) 
    }
     let total = water1 + water2 + water3;
      this.setState({water : (total + 1.5)} )
        }

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					{/* <p>Heart: {heartMin}</p>
					<p>Temperature : {tempMin}</p>
					<p>Steps : {stepsMin}</p> */}
					<div className="row">
						<Box
							icon="local_drink"
							color="#3A85FF"
							value={this.state.water}
							unit="L"   
              onChange={this.calculateWater}         
						/>
						<Box
							icon="directions_walk"
							color="black"
							value={this.state.steps}
							unit="steps"
              min= {stepsMin}
              max= {stepsMax}
              onChange={this.onDirectionChange}
						/>
						<Box
							icon="favorite"
							color="red"
							value={this.state.heart}
							unit="bpm"
              min= {heartMin}
              max= {heartMax}
              onChange={this.onHeartChange}
						/>
						<Box
							icon="wb_sunny"
							color="yellow"
							value={this.state.temperature}
							unit="°C"
              min = {tempMin}
              max= {tempMax}
              onChange={this.onHeatChange}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;