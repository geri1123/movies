import React, {  useEffect, useState } from 'react'
import './CSS/MoviesDetail.css'
import MoviesDetailDisplay from '../Components/MoviesDetailDisplay/MoviesDetailDisplay'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
// import { MoviesContext } from '../Context/MovieContext'
import MoviesDetailRelated from '../Components/MoviesDetailRelated/MoviesDetailRelated'


const MoviesDetail = () => {
    
    const {movieId}=useParams();
    // const {allProduct } = useContext(MoviesContext);
    // const product=allProduct.find((e)=>e.id===movieId);
   
      const [loading , setLoading]=useState(true);
     const [product , setProduct]=useState('');
     useEffect(()=>{
       fetch(`http://localhost:2000/allproducts/${movieId }`  )
       .then((res)=>res.json())
       
       .then((data)=>{
        setProduct(data);
        setLoading(false);
      })
     } , [product ,movieId]);
    
         
      
    
  return (
    <div className='moviesdetail'>
        {loading && <div className='loading'>Loading...</div>}
        
    <MoviesDetailDisplay product={product}  />
     <MoviesDetailRelated product={product} /> 
    </div>
  )
}

export default MoviesDetail
 