import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Link, Switch} from "react-router-dom";
import weekly from "./weekly";
import weeklyBattle from "./weekly-battle";
import popular from "./popular";
import popularBattle from "./popular-battle";
import favorites from "./favorites";

class Home extends React.Component {
	render() {
		return (
      <div className="container">
          <h1>Home</h1>
          <nav className="navbar">
            <ul className="navbar-nav">
                <li ><Link to="/weekly" className="text-decoration-none">weekly</Link></li>
                <li ><Link to="/weeklyBattle" className="text-decoration-none">weeklyBattle</Link></li>
                <li><Link to="/popular" className="text-decoration-none">popular</Link></li>
                <li><Link to="/popularBattle" className="text-decoration-none">popularBattle</Link></li>
                <li><Link to="/favorites" className="text-decoration-none">favorites</Link></li>
            </ul>
          </nav>
      </div>

     )}
}
export default Home;