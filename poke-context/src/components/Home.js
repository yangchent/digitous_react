import React from 'react';
import { useState, useEffect } from "react";


function Home(){
    const [pokemon, setPokemon] = useState(0);

    useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/1")
			.then((res) => res.json())
			.then((res) => {
			     console.log(res);
			});
        })

  return <div>
    <h1>Home</h1>
    {/* {posts.map((post) => (
            <p key={post.id}>{post.name} </p>
        
			))} */}
  </div>
}
export default Home;