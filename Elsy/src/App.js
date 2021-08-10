import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/global.css";
import Box from "./components/Box";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

const App= ()=> {
  const [water, setWater] = useState(0);
  const [heart, setHeart] = useState(120);
  const [temperature, setTemperature] = useState(-10);
  const [steps, setSteps] = useState(3000);

const onHeartChange=(e)=>{
  return setHeart(e.target.value),
      calculateWater(e.target.value)
    } 
const onHeatChange=(e)=>{
  return setTemperature(e.target.value ),
      calculateWater(e.target.value)
  }
const onDirectionChange=(e)=>{
  return setSteps(e.target.value),
  calculateWater(e.target.value)
    // (prevState) => {
    // return{
    //   ...prevState,
    //   steps : e.target.value ,
      // water :calculateWater(prevState, e.target.value)
    }

 const calculateWater = () => {
  let water1=0
  let water2=0
  let water3=0
  if(temperature > 20){
    water1 = .02*(temperature -20)
  }
 else if(heart >120){
  water2 = 0.0008*(heart -120)
  }
  else if (steps >10000){
    water3 = 0.00002*(steps-10000) 
  }
   let total = water1 + water2 + water3;
    setWater(total + 1.5)
      }
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
                value={water}
                unit="L"   
                onChange={calculateWater}         
              />
              <Box
                icon="directions_walk"
                color="black"
                value={steps}
                unit="steps"
                min= {stepsMin}
                max= {stepsMax}
                onChange={onDirectionChange}
              />
              <Box
                icon="favorite"
                color="red"
                value={heart}
                unit="bpm"
                min= {heartMin}
                max= {heartMax}
                onChange={onHeartChange}
              />
              <Box
                icon="wb_sunny"
                color="yellow"
                value={temperature}
                unit="°C"
                min = {tempMin}
                max= {tempMax}
                onChange={onHeatChange}
              />
            </div>
          </div>
        </div>
      );
    }
  
// class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //       water : 0,
  //       heart : 120,
  //       temperature : -10,
  //       steps : 3000
  //   } 
  // }
  
  // onHeartChange=(e)=>{
  //   this.setState((prevState) => {
  //     return{
  //       ...prevState,
  //       heart : e.target.value,
  //       water :this.calculateWater(prevState, e.target.value)
  //     } 
  //   });
  // }
  // onHeatChange=(e)=>{
  //   this.setState((prevState) => {
  //     return{
  //       ...prevState,
  //       temperature : e.target.value ,
  //       water :this.calculateWater(prevState, e.target.value)
  //   }
  // })
  // }
  // onDirectionChange=(e)=>{
  //   this.setState((prevState) => {
  //     return{
  //       ...prevState,
  //       steps : e.target.value ,
  //       water :this.calculateWater(prevState, e.target.value)
  //     }
  //   })
  // }
  // calculateWater = (newState)=> {
  //   let water1=0
  //   let water2=0
  //   let water3=0
  //   if(this.state.temperature > 20){
  //     water1 = .02*(this.state.temperature -20)
  //   }
  //  else if(this.state.heart >120){
  //   water2 = 0.0008*(this.state.heart -120)
  //   }
  //   else if (this.state.steps >10000){
  //     water3 = 0.00002*(this.state.steps-10000) 
  //   }
  //    let total = water1 + water2 + water3;
  //     this.setState({water : (total + 1.5)} )
  //       }

	// render() {
// 		return (
// 			<div className="container-fluid">
// 				<div className="row">
// 					{/* <p>Heart: {heartMin}</p>
// 					<p>Temperature : {tempMin}</p>
// 					<p>Steps : {stepsMin}</p> */}
// 					<div className="row">
// 						<Box
// 							icon="local_drink"
// 							color="#3A85FF"
// 							value={this.state.water}
// 							unit="L"   
//               onChange={this.calculateWater}         
// 						/>
// 						<Box
// 							icon="directions_walk"
// 							color="black"
// 							value={this.state.steps}
// 							unit="steps"
//               min= {stepsMin}
//               max= {stepsMax}
//               onChange={this.onDirectionChange}
// 						/>
// 						<Box
// 							icon="favorite"
// 							color="red"
// 							value={this.state.heart}
// 							unit="bpm"
//               min= {heartMin}
//               max= {heartMax}
//               onChange={this.onHeartChange}
// 						/>
// 						<Box
// 							icon="wb_sunny"
// 							color="yellow"
// 							value={this.state.temperature}
// 							unit="°C"
//               min = {tempMin}
//               max= {tempMax}
//               onChange={this.onHeatChange}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default App;