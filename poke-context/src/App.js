import React from 'react';
import { Route, BrowserRouter, Link} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";


function App(){
  return <BrowserRouter>
            <navBar className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div >
              <ul className="navbar-nav">
                <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item active"><Link to="/Login" className="nav-link">Login</Link></li>
              </ul>
              </div>
            </navBar>
          <switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
          </switch>
          
        </BrowserRouter>
 
}
export default App;