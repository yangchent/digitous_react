import React from 'react';
import { useState, useEffect, props } from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";


function Home(){

    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1")
          .then((res) => res.json())
          .then((res) => {
                setPokemon(res);
          });
    },[]);

        const handleClick = () =>{
          
          const randomId = Math.floor(Math.random() * 100) + 1;
            fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then((res) => res.json())
            .then((res) => {
              console.log(res.types[0].type.name)
            setPokemon(res);
			      });
          }

        if (!pokemon){
          return null
        }

  return  <div className="container text-center">
    <h1>Home</h1>
        
       <div className="card p-3">
              <p>Name :{pokemon.name}</p>
              <p>Weight :{pokemon.weight}</p>
              <p>Height :{pokemon.height}</p>
              <p>types : {pokemon.types[0].type.name}</p>
      </div>            
        
          <button onClick={handleClick} className="m-2 text-center">test</button>    
  </div>
}
export default Home;