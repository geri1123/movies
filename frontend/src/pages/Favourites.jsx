import React, { useContext } from 'react'
import { MoviesContext } from '../Context/MovieContext'
import { Link } from 'react-router-dom/cjs/react-router-dom'
// import Items from '../Components/Items/Items'
import './CSS/Favourites.css'
const Favourites = () => {
  const {allProduct, CartItem , getTotalCartItem }=useContext(MoviesContext);
  return (
    <div className='cartitem'>
      <h1>Ju keni {getTotalCartItem() } filma ne Favorit</h1>
      <div className='Moviefavourites'>
    {allProduct.map((product , i)=>{
      if(CartItem[product.id]>0){
          return <div className="items" key={i}>
            <Link to={`/MoviesDetail/${product.id}/${product.title}${product.year}`}>
            <img src={product.posterUrl} alt="" />
            <div className="title">
              <h3>{product.title}</h3>
              <h3>{product.year}</h3>
            </div>
            </Link>
            <div className='genre'>
              {product.genres.map((genre, i)=>(
                <p key={i}>{genre}</p>
              ))}
            
            </div>
          </div>
      }else {
        return null
      }
    })}
</div>
    </div>
  )
}

export default Favourites
