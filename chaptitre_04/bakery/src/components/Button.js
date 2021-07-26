import React from "react";

class Button extends React.Component {
	render() {
		return (
			<button onClick={this.props.onClick} name={this.props.children}>
				{this.props.children}
			</button>
		);
	}
}

export default Button;