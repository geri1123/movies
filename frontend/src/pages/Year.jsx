import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import Items from '../Components/Items/Items';
import './CSS/Year.css'
const Year = () => {
  const { startYear, endYear } = useParams();
  const [allProduct , setAllProduct]=useState([]);
  useEffect(()=>{
     fetch('http://localhost:8000/movies')
    .then((res)=>res.json())
    .then((data)=>{setAllProduct(data)})
  } ,[]);
  
  
  const yearFilter = allProduct.filter((e) => e.year >= Number(startYear) && e.year < Number(endYear));


  
  return (

    <div className='year'>
      {
        yearFilter.map((movie , i)=>{
          return <Items key={i} id={movie.id} posterUrl={movie.posterUrl} title={movie.title} year={movie.year} genres={movie.genres} actors={movie.actors} plot={movie.plot} runtime={movie.runtime} />
        })
      }

      
    </div>
  )
}

export default Year
