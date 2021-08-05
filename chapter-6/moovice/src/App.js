import React from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Home from "./components/home";
import weekly from "./components/weekly";
import weeklyBattle from "./components/weekly-battle";
import popular from "./components/popular";
import popularBattle from "./components/popular-battle";
import favorites from "./components/favorites";


class App extends React.Component {
	render() {
		return (
      <BrowserRouter>
        <Route exact path= "/" component={Home}></Route>
        <Route path= "/weekly" component={weekly}></Route>
        <Route path= "/weeklyBattle" component={weeklyBattle}></Route>
        <Route path= "/popular" component={popular}></Route>
        <Route path= "/popularBattle" component={popularBattle}></Route>
        <Route path= "/favorites" component={favorites}></Route>
        
      </BrowserRouter>

     )}
}
export default App;