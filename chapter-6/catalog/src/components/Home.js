import React from "react";
import movies from "../movie.json";
import { Link } from "react-router-dom";


class Home extends React.Component {
    render() {
	    return (
        <div>
            <h1>Home</h1>
                {movies.map(movie=>{
                    return (
                            <p><Link to="/id" >{movie.title}</Link></p>
                    )
                })   }    
        </div>
        )
    }     
}

export default Home;