import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
 import Items from '../Components/Items/Items';
 import { useLocation , useHistory } from 'react-router-dom/cjs/react-router-dom';
 import ReactPaginate from 'react-paginate';
import './CSS/Year.css'
import '../Components/Movies/Movies.css'
import '../Components/Items/Item.css'
import GridLoader from 'react-spinners/GridLoader';
// import '../Components/Movies/Movies.css'
const Year = () => {
  const { startYear, endYear } = useParams();
  const [allProduct , setAllProduct]=useState([]);
  const [loading , setLoading]=useState(true)
  useEffect(()=>{
     fetch('http://localhost:2000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProduct(data)})
    setLoading(false);
  } ,[]);
  
  
  const yearFilter = allProduct.slice().reverse().filter((e) => e.year >= Number(startYear) && e.year <= Number(endYear));


   const length=yearFilter.length;


    // State variables for pagination
 const history=useHistory();
 const location=useLocation();
// Read the current page number from the URL
const query = new URLSearchParams(location.search);
const currentPageFromUrl = parseInt(query.get('page') || '0', 10);

 
 const [currentPage, setCurrentPage] = useState(currentPageFromUrl);
 const itemsPerPage =36; // Number of movies per page
 
 // Calculate total number of pages
 const pageCount = Math.ceil(yearFilter.length / itemsPerPage);

 // Calculate the index of the first and last movie to display
 const startIndex = currentPage * itemsPerPage;
 const endIndex = Math.min(startIndex + itemsPerPage, yearFilter.length);

 // Slice the movies array to get movies for the current page
 const currentMovies = yearFilter.slice(startIndex, endIndex);
//router

 // Handle page change




 const handlePageChange = ({ selected }) => {
   setCurrentPage(selected);
   history.push(`/year/${startYear}/${endYear}?page=${selected + 1}`);

   window.scrollTo({ top: 0, behavior: 'smooth' });
 };

  return (

    <div className='moviehomepage'>
       <h5>Ju keni {length} rezultate nga viti {startYear} deri ne {endYear }</h5> 
    {loading && <div className='loading'><GridLoader color="#36d7b7" /></div>}
      <div className="movies">
    {
       currentMovies.map((movie , i)=>{
          return <Items key={i} id={movie.id} posterUrl={movie.posterUrl} title={movie.title} year={movie.year} genres={movie.genres} actors={movie.actors} plot={movie.plot} runtime={movie.runtime} />
        })
        
        
      }
      </div>

       {/* Pagination */}
       {yearFilter.length > itemsPerPage && (
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

      {/* Manually trigger pagination change */}
    </div>
  )
}

export default Year
