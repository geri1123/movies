import React, {  useState } from 'react'
import {yeardropdownitems  } from './dropdownitems'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import "./dropdown.css"

const Dropdownyear = () => {
 
  const [dropdownVisibleyear, setDropdownVisibleyear] =useState(false);
  
  return (
    <div className='dropdown' >
        <ul className= "uldropdown" >
            {yeardropdownitems.map((e , i)=>{
                 const nextYear = yeardropdownitems[i + 1] ? yeardropdownitems[i + 1].value : new Date().getFullYear() + 1;
                return <li key={i}>
                    <Link to={`/year/${e.value}/${nextYear -1 }`} onClick={() => setDropdownVisibleyear(!dropdownVisibleyear)}>
                    <p>{e.name}</p>
                    </Link>
                </li>
            })}
        </ul>
      
    </div>
  )
}

export default Dropdownyear