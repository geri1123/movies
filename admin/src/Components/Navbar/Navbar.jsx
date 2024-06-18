import React from 'react'
import './Navbar.css'
import nav_profile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='nav-logo'>Movies</h1>
      <img src={nav_profile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar 
