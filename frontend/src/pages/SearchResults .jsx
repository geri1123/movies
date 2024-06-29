import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesContext } from '../Context/MovieContext';
import Items from '../Components/Items/Items';
import { useHistory , useLocation } from 'react-router-dom/cjs/react-router-dom';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './CSS/SearchResult.css';
import GridLoader from 'react-spinners/GridLoader';
const SearchResults = () => {
  const { searchQuery } = useParams();
  const { allProduct , loading } = useContext(MoviesContext);
  
  const filteredMovies = allProduct.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const history=useHistory();
  const location=useLocation();
 // Read the current page number from the URL
 const query = new URLSearchParams(location.search);
 const currentPageFromUrl = parseInt(query.get('page') || '0', 10);
 
  
  const [currentPage, setCurrentPage] = useState(currentPageFromUrl);
  const itemsPerPage =36; // Number of movies per page
  
  // Calculate total number of pages
  const pageCount = Math.ceil(filteredMovies.length / itemsPerPage);
 
  // Calculate the index of the first and last movie to display
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage,filteredMovies.length);
 
  // Slice the movies array to get movies for the current page
  const currentMovies = filteredMovies.slice(startIndex, endIndex);
 //router
 
  // Handle page change
 
 
 
 
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    history.push(`/search/${searchQuery}?page=${selected + 1}`);
 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 

  return (
    <div className="moviehomepage">
      <h5>Search Results for "{searchQuery}"</h5>
      {loading && <div className='loading'><GridLoader color="#36d7b7" /></div>} 
      <div className="movies">
        {filteredMovies.length > 0 ? (
          currentMovies.map((movie, i) => (
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
          <div className="noresult">
          <p>No results found.</p>
          </div>
        )}
      </div>
      {filteredMovies.length > itemsPerPage && (
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          disableInitialCallback // Disable initial pagination callback
        />
      )}
    </div>
  );
}

export default SearchResults;
