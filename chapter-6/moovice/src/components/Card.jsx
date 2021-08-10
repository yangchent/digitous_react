import React,{ props }from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

const Card= (props)=> {
   return (
      <div className="card" style={{width:'18rem;'}}>
         <img src={"https://image.tmdb.org/t/p/w300/" + props.img} onClick={props.onClick} class="card-img-top" alt="Photo" />
            <div class="card-body">
               <p class="card-text">{props.title}</p>
               <p class="card-text">{props.releaseDate}</p>
               <p class="card-text">{props.overview}</p>

            </div>
      </div>

  )}

export default Card;