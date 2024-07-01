import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
 import Items from '../Components/Items/Items';
 import { useHistory , useLocation } from 'react-router-dom/cjs/react-router-dom';
 import './CSS/Genres.css'
import '../Components/Movies/Movies.css'
import '../Components/Items/Item.css'
import GridLoader from 'react-spinners/GridLoader';
const Genres = () => {
   

    const {name}=useParams();
    const [allProduct , setAllProduct]=useState([]);
    const [loading , setLoading]=useState(true)
    useEffect(()=>{
        fetch('http://localhost:2000/allproducts')
        .then((res)=>res.json())
        .then((data)=>{setAllProduct(data)})
        setLoading(false);
    } , []);
     const genresfilter=allProduct.slice().reverse().filter((prod)=>prod.genres.includes(name));
    const length=genresfilter.length;
    // State variables for pagination
 const history=useHistory();
 const location=useLocation();
// Read the current page number from the URL
const query = new URLSearchParams(location.search);
const currentPageFromUrl = parseInt(query.get('page') || '0', 10);

 
 const [currentPage, setCurrentPage] = useState(currentPageFromUrl);
 const itemsPerPage =36; // Number of movies per page
 
 // Calculate total number of pages
 const pageCount = Math.ceil(genresfilter.length / itemsPerPage);

 // Calculate the index of the first and last movie to display
 const startIndex = currentPage * itemsPerPage;
 const endIndex = Math.min(startIndex + itemsPerPage, genresfilter.length);

 // Slice the movies array to get movies for the current page
 const currentMovies = genresfilter.slice(startIndex, endIndex);
//router

 // Handle page change




 const handlePageChange = ({ selected }) => {
   setCurrentPage(selected);
   history.push(`/genre/${name}?page=${selected + 1}`);

   window.scrollTo({ top: 0, behavior: 'smooth' });
 };



  return (
    <div className='moviehomepage'>
    <h5>You have {length} results from {name}</h5>
    {loading && <div className='loading'><GridLoader color="#36d7b7" /></div>}
      <div className="movies">
      

     
      {  
        currentMovies.map((movie , i)=>{
         
          
            return  <Items key={i} id={movie.id} posterUrl={movie.posterUrl} title={movie.title} year={movie.year} genres={movie.genres} actors={movie.actors} plot={movie.plot} runtime={movie.runtime} />
        })
      }
       </div>
       {/* Pagination */}
      { genresfilter.length>itemsPerPage &&(
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

export default Genres
