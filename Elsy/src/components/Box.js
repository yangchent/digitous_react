import React, {props} from "react";

const Box =(props)=> {
	const addRange=()=> {
		if(props.icon !== "local_drink"){ 
		 return <input onChange={props.onChange} type="range" min={props.min} max={props.max} value= {props.value}></input>
		}}
		return (
			<div className="box col-sm-3 col-6">
				<span
					className="material-icons"
					style={{
						color:
							props.color === undefined
								? "blue"
								: props.color,
						fontSize: 100,
					}}
				>
					{props.icon}
				</span>
				
				<p>
					{props.value} {props.unit}
				</p>
				{addRange()}
			</div>
		);
}


// class Box extends React.Component {
// 	render() {
// 		const addRange=()=> {
// 		if(this.props.icon !== "local_drink"){ 
// 		 return <input onChange={this.props.onChange} type="range" min={this.props.min} max={this.props.max} value= {this.props.value}></input>
// 		}}

// 		return (
// 			<div className="box col-sm-3 col-6">
// 				<span
// 					className="material-icons"
// 					style={{
// 						color:
// 							this.props.color === undefined
// 								? "blue"
// 								: this.props.color,
// 						fontSize: 100,
// 					}}
// 				>
// 					{this.props.icon}
// 				</span>
				
// 				<p>
// 					{this.props.value} {this.props.unit}
// 				</p>
// 				{addRange()}
// 			</div>
// 		);
// 	}
// }

export default Box;