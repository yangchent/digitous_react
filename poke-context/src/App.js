import React from 'react';
import { useState, useEffect } from "react";
import { Route, BrowserRouter, Link} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";


function App(){
  return <BrowserRouter>
            <navBar>
              <ul >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
              </ul>
            </navBar>
          <switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
          </switch>
          
        </BrowserRouter>
 
}
export default App;