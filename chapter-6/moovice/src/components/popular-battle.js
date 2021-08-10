import React, { useState, useEffect } from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Home from "./home";
import favorites from "./favorites";

const PopularBattle = ()=> {
   const [currentBattle, setCurrentBattle]= useState(0);
   const [movies, setMovies]= useState([]);
   const [favourites, setFavorites]= useState([])
         
  
  useEffect(()=> {
   fetch( "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=20e0cad7b9b54645e2cd9dc394f11db8")
      .then(res => res.json())
      .then(movie => {
      setMovies(movie.results)  
      })
      .catch(error => console.error(error));
  })
   const handleClick = () => {
              setCurrentBattle(currentBattle + 2,) 
            //   favorites : localStorage.setItem('favorites', JSON.stringify(this.state.currentBattle))
   }
   
		return (
      <div className="container">
         <h1>Popular Battle</h1>
            <navBar />

         <div className="card" style={{width: '18rem;'}}> 
            {movies.slice(currentBattle, currentBattle+2).map((movie)=>{
               const movieLink = "https://image.tmdb.org/t/p/w300/"
                  return <div className="col-4">
                           <Card 
                           onClick={handleClick}
                           img = { movie.poster_path}
                           title = {movie.title}
                           releaseDate ={movie.release_date}
                           overview = {movie.overview}/>
                           </div>
               })} 
                  
         </div>
      </div>
     )
}
export default PopularBattle;