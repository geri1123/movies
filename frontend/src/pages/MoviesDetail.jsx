import React, { useContext } from 'react'
import './CSS/MoviesDetail.css'
import MoviesDetailDisplay from '../Components/MoviesDetailDisplay/MoviesDetailDisplay'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import { MoviesContext } from '../Context/MovieContext'
import MoviesDetailRelated from '../Components/MoviesDetailRelated/MoviesDetailRelated'
const MoviesDetail = () => {
    const {allProduct } = useContext(MoviesContext);
    const {movieId}=useParams();
    const product=allProduct.find((e)=>e.id===movieId);
    
  return (
    <div className='moviesdetail'>

        
    <MoviesDetailDisplay product={product}  />
    <MoviesDetailRelated product={product}/>
    </div>
  )
}

export default MoviesDetail
