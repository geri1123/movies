 import React, { useEffect, useState } from 'react'
 import { GenresProdu } from './Genreprodu'
 import './GenreList.css'
 const GenreList = () => {
 const [product , setAllProduct]=useState([]);
 const [searchGenre , setSearchGenre]=useState('');
     const fetchmovie=async()=>{
         await fetch('http://localhost:2000/allproducts')
         .then((resp)=>resp.json())
         .then((data)=>{setAllProduct(data)})
     }
      useEffect(()=>{
         fetchmovie();
         } , [])

     const deletehandler= async(id)=>{
         fetch('http://localhost:2000/removeproduct'  , {
             method:'POST',
             headers:{
                 Accept:'application/json',
                 'Content-Type':'application/json',
               },
               body:JSON.stringify({id:id})

         });
         await fetchmovie();
     }
    
    const filterGenre= searchGenre ? 
    product.filter((movie)=>movie.genres.includes(searchGenre))
    :product;

   return (
     <div className='genrelist'>
        <div className="navgenre">
        <h3 className={searchGenre===""?'clicked':''} onClick={()=>setSearchGenre('')}>All movies</h3>
         {GenresProdu.map((genre )=>{
            return <h3 key={genre.id} 
            className={searchGenre===genre.name ? 'clicked' : ''} 
            onClick={()=>{setSearchGenre(genre.name)}} >
             {genre.name}
             </h3>
 })}
       </div> 
      <div className='searched'> Search :{searchGenre === '' ? <h3>"All movies"</h3> : <h3>"{searchGenre}"</h3>}</div>
       <div className="moviedisplay">
             {filterGenre.length===0 ? (
                 <div className="noprod">
                     <h4>there is no movie</h4>
                 </div>
                 ):
     

          
 
        
                  (filterGenre.map((movie , i)=>(
            
            
                 <div className='movieitem' key={i}>
                     <button onClick={()=>deletehandler(movie.id)}>Delete</button>
                     <img src={movie.posterUrl} alt="" />
                
                         <h5>{movie.title}</h5>
                 </div>
                  )))
                } 
         </div> 
         </div>
    
   )
 }


 export default GenreList







// import React, { useEffect, useState } from 'react';
// import { GenresProdu } from './Genreprodu';
// import './GenreList.css';

// const GenreList = () => {
//   const [product, setAllProduct] = useState([]);
//   const [selectedGenres, setSelectedGenres] = useState([]);

//   const fetchmovie = async () => {
//     await fetch('http://localhost:2000/allproducts')
//       .then((resp) => resp.json())
//       .then((data) => { setAllProduct(data); });
//   };

//   useEffect(() => {
//     fetchmovie();
//   }, []);

//   const deletehandler = async (id) => {
//     await fetch('http://localhost:2000/removeproduct', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ id }),
//     });
//     await fetchmovie();
//   };

//   const toggleGenre = (genre) => {
//     setSelectedGenres((prevSelectedGenres) =>
//       prevSelectedGenres.includes(genre)
//         ? prevSelectedGenres.filter((g) => g !== genre)
//         : [...prevSelectedGenres, genre]
//     );
//   };

//   const removeGenre = (genre) => {
//     setSelectedGenres((prevSelectedGenres) =>
//       prevSelectedGenres.filter((g) => g !== genre)
//     );
//   };

//   const filterGenre = selectedGenres.length > 0
//     ? product.filter((movie) =>
//         selectedGenres.some((genre) => movie.genres.includes(genre))
//       )
//     : product;

//   return (
//     <div className='genrelist'>
//       <div className="navgenre">
//         <h3
//           className={selectedGenres.length === 0 ? 'clicked' : ''}
//           onClick={() => setSelectedGenres([])}
//         >
//           All movies
//         </h3>
//         {GenresProdu.map((genre) => (
//           <h3
//             key={genre.id}
//             className={selectedGenres.includes(genre.name) ? 'clicked' : ''}
//             onClick={() => toggleGenre(genre.name)}
//           >
//             {genre.name}
//           </h3>
//         ))}
//       </div>
//       <div className='searched'>
//         Search: {selectedGenres.length === 0 ? (
//           <h3>"All movies"</h3>
//         ) : (
//           selectedGenres.map((genre, index) => (
//             <div key={index} style={{ display: 'inline-block',  margin: '5px 5px', padding:"3px ",borderRadius:"10px", border:"1px solid grey"  }}>
//               <h3 style={{ display: 'inline' }}>{genre}</h3>
//               <button
//                 style={{
//                   marginLeft: '5px',
//                   backgroundColor: 'transparent',
//                   border: 'none',
//                   cursor: 'pointer',
//                   color: 'red',
//                   fontSize: '1rem'
//                 }}
//                 onClick={() => removeGenre(genre)}
//               >
//                 X
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//       <div className="moviedisplay">
//         {filterGenre.length === 0 ? (
//           <div className="noprod">
//             <h4>There is no movie</h4>
//           </div>
//         ) : (
//           filterGenre.map((movie, i) => (
//             <div className='movieitem' key={i}>
//               <button onClick={() => deletehandler(movie.id)}>Delete</button>
//               <img src={movie.posterUrl} alt="" />
//               <h5>{movie.title}</h5>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default GenreList;