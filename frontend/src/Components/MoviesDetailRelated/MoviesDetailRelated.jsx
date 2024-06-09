import React, { useContext } from 'react'
import { MoviesContext } from '../../Context/MovieContext'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import './MoviesDetailRelated.css'

const MoviesDetailRelated = ({product}) => {
    const {allProduct}=useContext(MoviesContext);

    const related = allProduct.filter(
        (prod) => prod.id !== product.id && prod.genres.some((genre) => product.genres.includes(genre))
    ).slice(-8); 
    return (
<div className='MoviesDetailRelated '>
        <h1>Related Movies</h1>
    <div className="MoviesDetailRelatedItems">
        <div className="MoviesDetailRelatedItemsLeft">
            {
                related.map((e, i)=>{
             return <div className='itemsrelated' key={i}>
                    <Link to={`/MoviesDetail/${e.id}/${e.title}${e.year}`}>
               
                    <img src={e.posterUrl} alt="" />
                    <h3>{e.title}</h3>
                    </Link>
                     </div>
                                     })    
            }
        </div>
        <div className="MoviesDetailRelatedItemsRight">
            <p>rreklamaaaa</p>
        </div>

    </div>
</div>
  )
}

export default MoviesDetailRelated
