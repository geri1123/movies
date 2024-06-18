import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import listicon from '../../assets/Product_list_icon.svg'
import './Sidebar.css'
import genreimage from '../../assets/imagesgenre.jpg'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
<img src={add_product_icon } alt="" />
<p>Add product</p>
      </div>
      
      
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
<img src={listicon } alt="" />
<p>List product</p>
      </div>
      
      
      </Link>
      <Link to={'/genrelist'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
<img className='genreimg' src={genreimage} alt="" />
<p>List of genre</p>
      </div>
      
      
      </Link>
    </div>
  )
}

export default Sidebar
