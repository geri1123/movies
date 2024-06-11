import React, { useContext } from 'react'
import './MoviesDetailDisplay.css'
import { MoviesContext } from '../../Context/MovieContext';
import { FiYoutube } from "react-icons/fi";
import { Link } from 'react-router-dom/cjs/react-router-dom';
const MoviesDetailDisplay = (props) => {
   const {product}=props;
   const {AddToCart , RemoveFromCart , CartItem}=useContext(MoviesContext);
   const isAlreadyInCart=CartItem[product.id]>0
   if (!product) {
    return null; // or a loading/error message
}
  return (
<div className='moviedetaildisplay'  >
      
      <div className="detailimg">
      <img src={product.posterUrl} alt="" />
      </div>
  <div className="upper">

      <div className="moviedetaildescription">
        <div className="mvdescrgenre">
            <h1>{product.title}({product.year})</h1>
            <div className="genredisplay">
              {product.genres.map((genre , i)=>(
               <Link to={`/genre/${genre}`}> <h2 key={i}>{genre}</h2></Link>
                ))}
            </div>
            <h3>{product.actors}</h3>
          
        </div>


        <div className="movieright">
          <div className="buttonMovie">
            <button 
               onClick={() => isAlreadyInCart ? RemoveFromCart(product.id) : AddToCart(product.id)}>
             {isAlreadyInCart ? 'Remove from favourites' :'Add to favourites'}
            </button>
          </div>
          <div className="runtime">
            <h3>{product.runtime} min</h3>
          </div>
         
          <div className="trailer">
            <h1><FiYoutube />Trailer</h1>
          </div> 
        </div>
        </div>
           <div className="plotdisplay">
             <h2>{product.plot}</h2>
           </div>
  </div>
    
</div>
  )
}

export default MoviesDetailDisplay
