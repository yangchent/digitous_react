import React from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/movieCard";

class App extends React.Component {
	render() {
		return (
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Movie} />
      </BrowserRouter>

     )}
}
export default App;