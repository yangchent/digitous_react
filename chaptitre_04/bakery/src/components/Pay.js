import React from "react";

class Pay extends React.Component {
	render() {
		return (
			<div>
				<p>
					Total:{" "}
					{this.props.items.reduce(
						(accumulator, currentItem) =>
							(accumulator += currentItem.price),
						0
					)}
					€
				</p>
			</div>
		);
	}
}

export default Pay;