import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import popular from "./popular";
import weeklyBattle from "./weekly-battle";
import popularBattle from "./Popular-battle";
import favorites from "./favorites";
import { Link, Switch} from "react-router-dom";

class PopularBattle extends React.Component {
   constructor(){
      super();
      this.state= {
          currentBattle : 0,
          movies : []
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
    handleClick = (() => {
      this.setState((prevState)=>{
          return{
              ...prevState,
              currentBattle: prevState.currentBattle + 2
          }
      })
  })
	render() {
		return (
      <div className="container">
         <h1>Popular Battle</h1>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <ul className="navbar-nav">
                  <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                  <li className="nav-item"><Link to="/weeklyBattle" className="nav-link">Weekly Battle</Link></li>
                  <li className="nav-item"><Link to="/popular" className="nav-link">Popular</Link></li>
                  <li className="nav-item"><Link to="/weekly" className="nav-link">Weekly</Link></li>
                  <li className="nav-item"><Link to="/favorites" className="nav-link">Favorites</Link></li>
               </ul>
            </nav>

            {this.state.movies.slice(0,2).map(movie => {
               return (
                  <ul className="list-group">
                     <li className="list-group-item"><img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} onClick={this.handleClick}/></li>
                     <li className="list-group-item">{movie.title}</li>
                     <li className="list-group-item">{movie.release_date}</li>
                     <li className="list-group-item">{movie.overview}</li> 
               </ul>
               )
         })}              
      </div>
     )}
}
export default PopularBattle;