import React, { useContext } from 'react'
import { MoviesContext } from '../Context/MovieContext'
import { Link } from 'react-router-dom/cjs/react-router-dom'
// import Items from '../Components/Items/Items'
 import './CSS/Favourites.css'
import '../Components/Movies/Movies.css'
import '../Components/Items/Item.css'
import GridLoader from 'react-spinners/GridLoader'
import Items from '../Components/Items/Items'
const Favourites = () => {
  const {allProduct, CartItem , getTotalCartItem , loading }=useContext(MoviesContext);
  
  return (
    <div className='moviehomepage'>
      <h5>Ju keni {getTotalCartItem() } filma ne Favorit</h5>
      {loading && <div className='loading'><GridLoader color="#36d7b7"/></div>}
      <div className='movies'>
        
    {allProduct.slice().reverse().map((product , i)=>{
      if(CartItem[product.id]>0){
        return  <Items  key={i} id={product.id} posterUrl={product.posterUrl} title={product.title} year={product.year} genres={product.genres} actors={product.actors} plot={product.plot} runtime={product.runtime}/>
          // return <div className="allitem movie-item"><div className="items" key={i}>
          //   <Link to={`/MoviesDetail/${product.id}/${product.title}${product.year}`}>
          //   <img src={product.posterUrl} alt="" />
          //   <div className="title">
          //     <h3>{product.title}</h3>
          //     <h3>{product.year}</h3>
          //   </div>
          //   </Link>
          //   <div className='genres'>
          //     {product.genres.map((genre, i)=>(
          //       <p key={i}>{genre}</p>
          //     ))}
          //   </div>
          //   </div>
          // </div>
      }else {
        return null
      }
    })}
</div>
    </div>
  )
}

export default Favourites
