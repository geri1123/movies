import React, {  useContext, useState } from 'react'
import { dropdownitems } from './dropdownitems'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import "./dropdown.css"
import { MoviesContext } from '../../Context/MovieContext'
const Dropdown = ({remove}) => {
 
  const [dropdownVisible, setDropdownVisible] =useState(false);
  const {allProduct}=useContext(MoviesContext);
  
   const getCountByGenre = (genre) => {
     return allProduct.filter(movie => movie.genres.includes(genre)).length;
   };
   const handleonClick=(e)=>{
    setDropdownVisible(!dropdownVisible);
    remove();
   }
  return (
    <div className='dropdown' >
        <ul className= "uldropdown" >
            {dropdownitems.map((e , i)=>{
                return <li key={i}>
                    <Link to={`/genre/${e.name}`} 
                    onClick={handleonClick}>
                    <p>{e.name}({getCountByGenre(e.name)})</p>
                    </Link>
                </li>
            })}
        </ul>
      
    </div>
  )
}

export default Dropdown
