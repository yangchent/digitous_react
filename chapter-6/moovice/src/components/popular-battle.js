import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

class PopularBattle extends React.Component {
   constructor(){
      super();
      this.state= {
          currentBattle :[]
      }
  }
  componentDidMount() {
   fetch( "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=20e0cad7b9b54645e2cd9dc394f11db8")
      .then(res => res.json())
      .then(movie => {
      this.setState({ currentBattle : movie.results });
      })
      .catch(error => console.error(error));
    }
	render() {
		return (
      <div>
         <h1>Popular Battle</h1>
            {this.state.currentBattle.slice(0,2).map(movie => {
               return (
                  <ul>
               <li><img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} /></li>
               <li>{movie.title}</li>
               <li>{movie.release_date}</li>
               <li>{movie.overview}</li> 
           </ul>
               )
         })}              
      </div>
     )}
}
export default PopularBattle;