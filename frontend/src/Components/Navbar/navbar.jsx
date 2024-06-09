import React, { useContext } from 'react'

import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { GrFavorite } from "react-icons/gr";
import { FaRegCircle } from "react-icons/fa6";
import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
import { BiAlignJustify } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import './navbar.css';
import { MoviesContext } from '../../Context/MovieContext';
const Navbar = () => {
  const {getTotalCartItem}=useContext(MoviesContext)
    const navref =useRef();
    const menuref=useRef();
    const shownavbar=()=>{
        navref.current.classList.toggle('responsiblenav');
        menuref.current.classList.toggle('responsiblenav')
    }
    const remove=()=>{
        navref.current.classList.remove('responsiblenav');
        menuref.current.classList.remove('responsiblenav');
    }
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navref.current && !navref.current.contains(event.target)) {
                remove();
            }
        };
    
        document.addEventListener("mousedown", handleOutsideClick);
    
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

  return (
    <div>
      <div className="navbar">
        <button className='nav-btn' onClick={shownavbar}>
      <BiAlignJustify />
      </button>
        <div className="nav-logo">
            <h1>Movie</h1>
        </div>
        <div className="nav-menu" ref={menuref} >
            <ul ref={navref} className='navul'>
            <button onClick={remove} className='nav-btn close'>
            <AiOutlineClose />
      </button>
                <li><Link to="/">Movies  <BiMoviePlay style={{marginLeft:"5px"}}/></Link></li>
                <li><Link>Serials  <BiCameraMovie style={{marginLeft:"5px"}}/> </Link></li>
                <li><Link>Zhanre  <FaRegCircle style={{marginLeft:"5px"}}/></Link></li>
                <li><Link to='/favourites'>Favourites  <GrFavorite style={{marginLeft:"5px"}} /></Link><span>{getTotalCartItem()}</span></li>
            </ul>
        </div>
        <div className="search">
            <input type="text" placeholder='Search...'/>
            <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
