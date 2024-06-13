import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Items from '../Components/Items/Items';
import './CSS/Genres.css'
const Genres = () => {
   

    const {name}=useParams();
    const [allProduct , setAllProduct]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/movies')
        .then((res)=>res.json())
        .then((data)=>{setAllProduct(data)})
    } , []);
     const genresfilter=allProduct.filter((prod)=>prod.genres.includes(name));
    const length=genresfilter.length;
  return (
    <div className='genresFilter'>
    <h5>Ju keni {length} rezultate nga {name}</h5>
      <div className="genressfilter">

     
      {  
        genresfilter.map((movie , i)=>{
         
          
            return  <Items key={i} id={movie.id} posterUrl={movie.posterUrl} title={movie.title} year={movie.year} genres={movie.genres} actors={movie.actors} plot={movie.plot} runtime={movie.runtime} />
        })
      }
       </div>
    </div>
  )
}

export default Genres
