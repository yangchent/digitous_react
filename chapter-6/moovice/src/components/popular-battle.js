import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Link, Switch} from "react-router-dom";
import Card from "./Card";
import Home from "./home";

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
            <Home />

         <div className="card" style={{width: '18rem;'}}> 
            {this.state.movies.slice(this.state.currentBattle, this.state.currentBattle+2).map((movie)=>{
               const movieLink = "https://image.tmdb.org/t/p/w300/"
                  return <div className="col-4">
                           <Card 
                           onClick={this.handleClick}
                           img = { movie.poster_path}
                           title = {movie.title}
                           releaseDate ={movie.release_date}
                           overview = {movie.overview}/>
                           </div>
               })} 
                  
         </div>
      </div>
     )}
}
export default PopularBattle;