import React, { useContext, useState } from 'react';
import { MoviesContext}  from '../../Context/MovieContext';
import Items from '../Items/Items';
import './Movies.css'
import { Link , useHistory , useLocation} from 'react-router-dom/cjs/react-router-dom';
import ReactPaginate from "react-paginate";
const Trending = () => {
    const [menu , setMenu]=useState('trending')
    const{allProduct , loading}=useContext(MoviesContext);
    const sortruntime=allProduct.slice().sort((a , b)=>b.runtime - a.runtime);

    const history = useHistory();
    const location = useLocation();
  
    // Read the current page number from the URL
    const query = new URLSearchParams(location.search);
    const currentPageFromUrl = parseInt(query.get('page') || '0', 10);
    // State variables for pagination
const [currentPage, setCurrentPage] = useState(currentPageFromUrl);
const itemsPerPage =24; // Number of movies per page

// Calculate total number of pages
const pageCount = Math.ceil(sortruntime.length / itemsPerPage);

// Calculate the index of the first and last movie to display
const startIndex = currentPage * itemsPerPage;
const endIndex = Math.min(startIndex + itemsPerPage, sortruntime.length);

// Slice the movies array to get movies for the current page
const currentMovies = sortruntime.slice(startIndex, endIndex);

// Handle page change
const handlePageChange = ({ selected }) => {
  setCurrentPage(selected);
  history.push(`/trending?page=${selected +1}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Function to manually trigger pagination change
// const goToPage = (pageNumber) => {
//   setCurrentPage(pageNumber);
// };

  return (
    
        <div className="moviehomepage">

<div className="Moviescategory">
  <h2>Movies</h2>
  <div className="imdb">
   <p> <Link to='/'>te fundit</Link></p>
  <p> <Link to="/azh">a-zh</Link> </p>
  <p onClick={()=>setMenu("trending")}> <Link to="/trending" className="Linka">trending</Link>{menu==="trending"? <hr/>:<></>}</p>
  </div>
</div>



<div className="movies" >
  {loading && <div>Loading...</div>}

  {currentMovies.map((movie , i)=>{
  return  <Items  key={i} id={movie.id} posterUrl={movie.posterUrl} title={movie.title} year={movie.year} genres={movie.genres} actors={movie.actors} plot={movie.plot} runtime={movie.runtime}/>
}

  )}
</div>
{/* Pagination */}
<ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
       
        disableInitialCallback // Disable initial pagination callback
      />

      {/* Manually trigger pagination change */}
</div>
      
    
  )
}

export default Trending