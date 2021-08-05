import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Link, Switch} from "react-router-dom";
import weekly from "./weekly";
import weeklyBattle from "./weekly-battle";
import popular from "./popular";
import popularBattle from "./Popular-battle";
import favorites from "./favorites";

class Home extends React.Component {
	render() {
		return (
      <div className="container">
          <h1>Home</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/weekly" className="nav-link">weekly</Link></li>
                <li className="nav-item"><Link to="/weeklyBattle" className="nav-link">weeklyBattle</Link></li>
                <li className="nav-item"><Link to="/popular" className="nav-link">popular</Link></li>
                <li className="nav-item"><Link to="/popularBattle" className="nav-link">popularBattle</Link></li>
                <li className="nav-item"><Link to="/favorites" className="nav-link">favorites</Link></li>
            </ul>
          </nav>
      </div>

     )}
}
export default Home;