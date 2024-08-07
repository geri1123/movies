import React, { useContext } from 'react'
import { MoviesContext } from '../../Context/MovieContext'
import Items from '../Items/Items';
import './Movies.css';
import GridLoader from 'react-spinners/GridLoader';
const Filmat2024 = () => {
    const {allProduct  , loading}=useContext(MoviesContext);
    const newest=allProduct.slice(-12).sort((a , b)=>b.year - a.year);
  return (
    <div className='filma2024'>
                <h2>New Movies</h2>

                {loading && <div className='loading'><GridLoader color="#36d7b7" /></div>}
        <div className="filma2024items">
            

       
            {
                newest.map((movie, i)=>{
                    return <Items  key={i} id={movie.id} posterUrl={movie.posterUrl} title={movie.title} year={movie.year} genres={movie.genres} actors={movie.actors} plot={movie.plot} runtime={movie.runtime}/>
                })
            }
       </div>
    </div>
  )
}

export default Filmat2024
