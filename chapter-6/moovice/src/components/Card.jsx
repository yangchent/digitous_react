import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

class Card extends React.Component {
	render() {
		return (
      <div>
          
         <ul>
             <li><img src={"https://image.tmdb.org/t/p/w300/" + this.props.img} /></li>
             <li>{this.props.title}</li>
             <li>{this.props.releaseDate}</li>
             <li>{this.props.overview}</li>
         </ul>
      </div>

     )}
}
export default Card;