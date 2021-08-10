import React, {useState, useEffect} from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Link, Switch} from "react-router-dom";
import Card from "./Card";
import Home from "./home";

const Popular=(()=> {
    const [movies, setMovies] = useState([]);
        
    useEffect(()=> {
    
        fetch( "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=20e0cad7b9b54645e2cd9dc394f11db8")
        .then(res => res.json())
        .then(movie => {
            setMovies(movie.results);
	})
	.catch(error => console.error(error));
    })
        return (
            <div className="container" >
                <h1>Popular</h1>
                    <navBar />
                <div className="card" style={{width: '18rem;'}}> 
                    {movies.map(movie => {
                        return <div className="col-4">
                            <Card 
                                img = { movie.poster_path}
                                title = {movie.title}
                                releaseDate ={movie.release_date}
                                overview = {movie.overview}
                                />
                        </div>
                    })
                    }
                    </div>
                </div>
     )
})
export default Popular;