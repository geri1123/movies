import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesContext } from '../Context/MovieContext';
import Items from '../Components/Items/Items';
import './CSS/SearchResult.css';

const SearchResults = () => {
  const { searchQuery } = useParams();
  const { allProduct } = useContext(MoviesContext);
  
  const filteredMovies = allProduct.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-results-page">
      <h2>Search Results for "{searchQuery}"</h2>
      <div className="movies">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, i) => (
            <Items
              key={i}
              id={movie.id}
              posterUrl={movie.posterUrl}
              title={movie.title}
              year={movie.year}
              genres={movie.genres}
              actors={movie.actors}
              plot={movie.plot}
              runtime={movie.runtime}
            />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
