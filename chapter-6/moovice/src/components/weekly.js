import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Home from "./home";
import popular from "./popular";
import weeklyBattle from "./weekly-battle";
import popularBattle from "./Popular-battle";
import favorites from "./favorites";
import { Link, Switch} from "react-router-dom";

class weekly extends React.Component {
	render() {
		return (
      <div className="container">
          <h1>Weekly</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/weeklyBattle" className="nav-link">WeeklyBattle</Link></li>
                    <li className="nav-item"><Link to="/popular" className="nav-link">Popular</Link></li>
                    <li className="nav-item"><Link to="/popularBattle" className="nav-link">PopularBattle</Link></li>
                    <li className="nav-item"><Link to="/favorites" className="nav-link">Favorites</Link></li>
                </ul>
            </nav>
      </div>

     )}
}
export default weekly;