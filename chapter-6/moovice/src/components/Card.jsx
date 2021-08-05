import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

class Card extends React.Component {
	render() {
		return (
      <div>
         <ul className="list-group">
             <li className="list-group-item"><img src={"https://image.tmdb.org/t/p/w300/" + this.props.img} /></li>
             <li className="list-group-item">{this.props.title}</li>
             <li className="list-group-item">{this.props.releaseDate}</li>
             <li className="list-group-item">{this.props.overview}</li>
         </ul>
      </div>

     )}
}
export default Card;