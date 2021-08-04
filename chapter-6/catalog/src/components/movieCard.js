import React from "react";
import movies from "../movie.json";
import { useParams } from "react-router-dom";


class Home extends React.Component {
    render() {
        const filteredMovie= movies.find(movie => {
            return (
                parseInt(this.props.match.params.id= movie.id)
        )})
	    return (
        <div>
            <h1>Movie Details</h1>
                    <ul>
                        <p><img scr={filteredMovie.image} /></p>
                        <li>Movie Name :{filteredMovie.title}</li>
                        <li>Movie Director: {filteredMovie.director}</li>
                        <li>Movie Stars:{filteredMovie.stars}</li>
                        <li>Movie description{filteredMovie.description}</li>
                    </ul>
        </div>
       
        )
    }     
}
export default Home;