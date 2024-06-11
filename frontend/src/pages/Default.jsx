import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import './CSS/Default.css'
const Default = () => {
  return (
    <div className='default'>
    <p>Page not found</p>
      <h1>Error 4<span>0</span>4</h1>
      
      <Link to="/">Go back to home page.</Link>
    </div>
  )
}

export default Default
