// chemin qui commence sans ./ -> une librairie
import React from "react";
// Global CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/global.css";
// Components
import Box from "./components/Box";

const tempMin = -20;
//const tempMax = 40;
const heartMin = 80;
//const heartMax = 180;
const stepsMin = 0;
//const stepsMax = 50000;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        water : "0",
        heart : "120",
        temperature : "-10",
        steps : "3000"
    }
    
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
							value={1.5}
							unit="L"
						/>
						<Box
							icon="directions_walk"
							color="black"
							value={3000}
							unit="steps"
						/>
						<Box
							icon="favorite"
							color="red"
							value={120}
							unit="bpm"
						/>
						<Box
							icon="wb_sunny"
							color="yellow"
							value={-10}
							unit="°C"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;