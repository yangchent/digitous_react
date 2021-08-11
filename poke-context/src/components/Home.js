import React from 'react';
import { useState, useEffect, useContext } from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../App";

function Home(){

    const [pokemon, setPokemon] = useState();
    const  checkContext = useContext(UserContext)

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1")
          .then((res) => res.json())
          .then((res) => setPokemon(res)
          );
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
    {!checkContext.isLogged ? <p>you are not logged in</p> :
       <div className="card p-3">
              <p>Name :{pokemon.name}</p>
              <p>Weight :{pokemon.weight}</p>
              <p>Height :{pokemon.height}</p>
              <p>types : {pokemon.types[0].type.name}</p>
      </div>  }          
        
          <button onClick={handleClick} className="m-2 text-center">test</button>   
  </div>
}
export default Home;