import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Home from "./home";
import Popular from "./popular";
import Weekly from "./weekly";
import PopularBattle from "./Popular-battle";
import Favorites from "./favorites";
import { Link, Switch} from "react-router-dom";

class weeklyBattle extends React.Component {
	render() {
		return (
            <div className="container">
        <h1>Weekly battle</h1>
        <navBar />
        </div>
     )}
}
export default weeklyBattle;