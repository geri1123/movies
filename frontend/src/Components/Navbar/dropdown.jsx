import React, {  useState } from 'react'
import { dropdownitems } from './dropdownitems'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import "./dropdown.css"
const Dropdown = () => {
 
  const [dropdownVisible, setDropdownVisible] =useState(false);
  
  return (
    <div className='dropdown' >
        <ul className= "uldropdown" >
            {dropdownitems.map((e , i)=>{
                return <li key={i}>
                    <Link to={`/genre/${e.name}`} onClick={() => setDropdownVisible(!dropdownVisible)}>
                    <p>{e.name}</p>
                    </Link>
                </li>
            })}
        </ul>
      
    </div>
  )
}

export default Dropdown
