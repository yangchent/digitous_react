import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";


class Card extends React.Component {
	render() {
		return (
         <div className="card" style={{width:'18rem;'}}>
            <img src={"https://image.tmdb.org/t/p/w300/" + this.props.img} onClick={this.props.onClick} class="card-img-top" alt="" />
               <div class="card-body">
                  <p class="card-text">{this.props.title}</p>
                  <p class="card-text">{this.props.releaseDate}</p>
                  <p class="card-text">{this.props.overview}</p>

               </div>
         </div>

     )}
}
export default Card;