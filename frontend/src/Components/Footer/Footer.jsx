import React from 'react'
import wp from '../../Assets/whatsapp_icon.png'
import ins from '../../Assets/instagram_icon.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="menusocial">
        <div className="menu">
          <h4>Movies </h4>
          <h4>Seriale</h4>
          <h4>About</h4>
          <h4>Favourite</h4>
        </div>
        <div className="socialmedia">
          <img src={wp} alt="" />
          <img src={ins} alt="" />
        </div></div>
        <div className="copyright">
      <hr />
      <p>Copyright @ 2024 all right reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
