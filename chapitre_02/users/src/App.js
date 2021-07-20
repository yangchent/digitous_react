import React from "react";
import users from "./users";
import "./App.css";
import UserInfo from "./UserInfo";


class App extends React.Component {
	render() {
		return (
			<div>
				{users.map((user) => (
					<UserInfo name={user.name} email={user.email} />
				))}
			</div>
		);
	}
}

export default App;