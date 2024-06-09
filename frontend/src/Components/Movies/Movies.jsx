import React, { useContext } from 'react';
import { MoviesContext}  from '../../Context/MovieContext';
import Items from '../Items/Items';
import './Movies.css'

const Movies = () => {
     const{allProduct}=useContext(MoviesContext);
    

  return (
    <div className="moviehomepage">

      <div className="Moviescategory">
        <h2>Movies</h2>
        <div className="imdb">
          <p>a-zh</p>
          <p>te fundit</p>
          <p>imdb</p>
          <p>trending</p>
        </div>
      </div>



      <div className="movies">

        {allProduct.map((movie , i)=>{
        return  <Items key={i} id={movie.id} posterUrl={movie.posterUrl} title={movie.title} year={movie.year} genres={movie.genres} actors={movie.actors} plot={movie.plot} runtime={movie.runtime} />
  }

        )}
      </div>
  </div>
  )
}

export default Movies
