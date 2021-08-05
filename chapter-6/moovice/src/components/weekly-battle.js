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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/weekly" className="nav-link">Weekly</Link></li>
                    <li className="nav-item"><Link to="/popular" className="nav-link">Popular</Link></li>
                    <li className="nav-item"><Link to="/popularBattle" className="nav-link">Popular Battle</Link></li>
                    <li className="nav-item"><Link to="/favorites" className="nav-link">Favorites</Link></li>
                </ul>
            </nav>
      </div>

     )}
}
export default weeklyBattle;