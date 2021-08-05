import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Link, Switch} from "react-router-dom";
import Card from "./Card";
import Home from "./home";
import weekly from "./weekly";
import weeklyBattle from "./weekly-battle";
import popularBattle from "./Popular-battle";
import favorites from "./favorites";

class popular extends React.Component {
    constructor(){
        super();
        this.state= {
            movies :[]
        }
    }
    componentDidMount() {
        fetch( "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=20e0cad7b9b54645e2cd9dc394f11db8")
	.then(res => res.json())
	.then(movie => {
		this.setState({ movies : movie.results });

	})
	.catch(error => console.error(error));
    }
        render() {
            console.log(this.state.movies)
		    return (
                <div className="container" >
                    <h1>Popular</h1>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/weekly" className="nav-link">Weekly</Link></li>
                            <li className="nav-item"><Link to="/weeklyBattle" className="nav-link">WeeklyBattle</Link></li>
                            <li className="nav-item"><Link to="/popularBattle" className="nav-link">PopularBattle</Link></li>
                            <li className="nav-item"><Link to="/favorites" className="nav-link">Favorites</Link></li>
                        </ul>
                    </nav>

                    {this.state.movies.map(movie => {
                        return <li className="list-group-item">
                                <Card 
                                img = { movie.poster_path}
                                title = {movie.title}
                                releaseDate ={movie.release_date}
                                overview = {movie.overview}
                                /></li>
                    })
                    }
                </div>

     )}
}
export default popular;