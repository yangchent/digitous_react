import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Home from "./Home";

class App extends React.Component {
	render() {
		return (
      <BrowserRouter>
          <Route 
          exact path="/id" 
          component={Home}
           />
      </BrowserRouter>
     )}
}
export default App;