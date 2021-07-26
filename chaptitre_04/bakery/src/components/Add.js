import React from "react";

class Add extends React.Component {
	constructor() {
		super();

		this.state = {
			productName: "",
			price: 1,
		};
	}

	handleChangeProductName = (e) => {
		this.setState((prevState) => {
			return {
				...prevState,
				productName: e.target.value,
			};
		});
	};

	handleChangePrice = (e) => {
		this.setState((prevState) => {
			return {
				...prevState,
				price: parseInt(e.target.value),
			};
		});
	};

	handleAddItem = () => {
		this.props.addItem(this.state.productName, this.state.price);
	};

	render() {
		return (
			<div>
				<div>
					<input
						type="text"
						onChange={this.handleChangeProductName}
					/>
					<button onClick={this.handleAddItem}>Add</button>
				</div>
				<p>{this.state.price}€</p>
				<input
					type="range"
					onChange={this.handleChangePrice}
					min={0}
					max={10}
					value={this.state.price}
				/>
			</div>
		);
	}
}

export default Add;