import React from 'react'
import Movies from '../Components/Movies/Movies'
import './CSS/Home.css'
import  '../Assets/background.png'
import Filma2024 from '../Components/Movies/Filmat2024';
import Carousel from '../Components/Carousel/Carousel';
const Home = () => {
 
  return (
    <div className='home'>
      <Carousel/>
      <Movies/>
      <Filma2024/>
    </div>
  )
}

export default Home
