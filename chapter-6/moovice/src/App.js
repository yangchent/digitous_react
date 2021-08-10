import React from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Home from "./components/home";
import weekly from "./components/weekly";
import weeklyBattle from "./components/weekly-battle";
import popular from "./components/popular";
import popularBattle from "./components/Popular-battle";
import favorites from "./components/favorites";


class App extends React.Component {
	render() {
		return (
      <BrowserRouter>
          <div className="container">
          <navBar className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/weekly" className="nav-link">weekly</Link></li>
                <li className="nav-item"><Link to="/weeklyBattle" className="nav-link">weeklyBattle</Link></li>
                <li className="nav-item"><Link to="/popular" className="nav-link">popular</Link></li>
                <li className="nav-item"><Link to="/popularBattle" className="nav-link">popularBattle</Link></li>
                <li className="nav-item"><Link to="/favorites" className="nav-link">favorites</Link></li>
            </ul>
          </navBar>
      </div>
        <Switch>
        <Route exact path= "/" component={Home}></Route>
        <Route path= "/weekly" component={weekly}></Route>
        <Route path= "/weeklyBattle" component={weeklyBattle}></Route>
        <Route path= "/popular" component={popular}></Route>
        <Route path= "/popularBattle" component={popularBattle}></Route>
        <Route path= "/favorites" component={favorites}></Route>
        </Switch>
      </BrowserRouter>

     )}
}
export default App;