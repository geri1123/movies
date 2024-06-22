import React, { useEffect, useState } from 'react'
// import { MoviesContext } from '../../Context/MovieContext'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import './MoviesDetailRelated.css'
// const {allProduct}=useContext(MoviesContext);
const MoviesDetailRelated = ({product}) => {
   
    const [allProduct , setAllProduct]=useState([]);
    


    useEffect(()=>{
        fetch('http://localhost:2000/allproducts')
        .then((res)=>res.json())
        .then((data)=>{setAllProduct(data)})
    } ,[])

    const related = allProduct.filter(
        // (prod) => prod.id !== product.id && prod.genres.some((genre) => product.genres.includes(genre))
        (prod) => prod.id !== product.id && prod.genres.filter((genre) => product.genres===genre)
    ).slice(-8); 
  
    return (
<div className='MoviesDetailRelated '>
        <h1>Related Movies</h1>
    <div className="MoviesDetailRelatedItems">
        <div className="MoviesDetailRelatedItemsLeft">
            {
                related.map((e, i)=>{
             return <div className='itemsrelated' key={i} onClick={window.scrollBy(0 ,0)}>
                    <Link  onClick={() => window.scrollTo(0, 0)} to={`/MoviesDetail/${e.id}/${e.title}${e.year}`}>
               
                    <img src={e.posterUrl} alt="" />
                    <h3>{e.title}</h3>
                    </Link>
                     </div>
                                     })    
            }
        </div>
        <div className="MoviesDetailRelatedItemsRight">
      

    </div>
</div>
</div>
    )
 }

export default MoviesDetailRelated
