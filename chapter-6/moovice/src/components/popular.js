import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Link, Switch} from "react-router-dom";
import Card from "./Card";
import Home from "./home";


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
                        <Home />
                    <div className="card" style={{width: '18rem;'}}> 
                        {this.state.movies.map(movie => {
                            return <div className="col-4">
                                <Card 
                                    onClick={this.handleClick}
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
     )}
}
export default popular;