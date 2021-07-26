import React from "react";
import "./App.css";
import Button from "./components/Button";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";

class App extends React.Component {
	constructor() {
		super();
      this.state = {
        activeTab: "add",
        items: [],
      };
	}

	handleChangeTab = (e) => {
		this.setState((prevState) => {
			return {
				...prevState,
				activeTab: e.target.name.toLowerCase(),
			};
		});
	};

	handleAddItem = (productName, price) => {
		this.setState((prevState) => {
			return {
				...prevState,
				items: [
					...prevState.items,
					{ productName: productName, price: price },
				],
			};
		});
	};

	// Render functions //
	renderTab = () => {
		switch (this.state.activeTab) {
			case "add":
				return <Add addItem={this.handleAddItem} />;
			case "list":
				return <List items={this.state.items} />;
			case "pay":
				return <Pay items={this.state.items} />;
			default:
				return <p>404 not found</p>;
		}
	};

	render() {
		return (
			<div>
				<h1>Bakery</h1>
				<div style={{ marginBottom: "1rem" }}>
					<Button onClick={this.handleChangeTab}>Add</Button>
					<Button onClick={this.handleChangeTab}>List</Button>
					<Button onClick={this.handleChangeTab}>Pay</Button>
				</div>

				{this.renderTab()}
			</div>
		);
	}
}

export default App;