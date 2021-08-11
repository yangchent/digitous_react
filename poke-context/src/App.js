import React, {createContext, useState} from 'react';
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
export const UserContext = createContext();

function App(){
  const [isLogged, setLogged] = useState(false);
  const setAuth= ()=> setLogged(!isLogged);
  const value ={
    isLogged: isLogged,
    setAuth: setAuth
  }
return(<div>
      <UserContext.Provider value={value}>
       
     
  <BrowserRouter>
            <navBar className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div >
              <ul className="navbar-nav">
                <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item active"><Link to="/Login" className="nav-link">Login</Link></li>
              </ul>
              </div>
            </navBar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
          
        </BrowserRouter>
        </UserContext.Provider>
        </div>)
        
}
export default App;