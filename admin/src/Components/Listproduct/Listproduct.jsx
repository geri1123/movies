import React, { useEffect, useState } from 'react';
import './Listproduct.css';

const Listproduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  
  const fetchInfo = async () => {
    await fetch('http://localhost:2000/allproducts')
      .then((res) => res.json())
      .then((data) => { setAllProducts(data) });
  };
  
  useEffect(() => {
    fetchInfo();
  }, []);
   const remove=async (id)=>{
    await fetch('http://localhost:2000/removeproduct' , {
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
   }
   const length=allProducts.length;

   const [search , setSearch]=useState('');

const [searchGenre , setSearchGenre]=useState('');
const filteredProducts = allProducts.filter((product) => {
  const matchesTitle = search === "" || product.title.toLowerCase().includes(search.toLowerCase());
  const matchesGenre = searchGenre === "" || product.genres.some((genre) => genre.toLowerCase().includes(searchGenre.toLowerCase()));
 
  return matchesTitle && matchesGenre;
});
const genrelength=filteredProducts.length;
  return (
    <div className='list-product'>
      <h2 className='length'> {length} Movies in db</h2>
      <div className="searchprod">
      <div className="search">
      <p>Search product by title</p>
      <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
     </div>
     < div className="search">
     <p>Search product by genre</p>
     <input type="text" value={searchGenre} onChange={ (e)=>{setSearchGenre(e.target.value)}}/>
     { searchGenre=="" ? null : (<h2 className='length'> Search for "{searchGenre}" , {genrelength} Movies </h2> )  }
      
     
         
    
    
     
     </div>
     </div>
      <table className="product-table">
        <thead>
          <tr>
          <th>Id</th>
            <th>Title</th>
            <th>Year</th>
            <th>Runtime</th>
            <th>Genres</th>
            <th>Director</th>
            <th>Actors</th>
            <th>Plot</th>
            <th>Poster</th>
            <th><span style={{ color: "red" }}>Remove</span></th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.year}</td>
              <td>{product.runtime}</td>
              <td>{product.genres.join(', ')}</td>
              <td>{product.director}</td>
              <td>{product.actors}</td>
              <td>{product.plot}</td>
              <td><img src={product.posterUrl} alt={product.title} className="product-thumbnail" /></td>
              <td><button onClick={()=>{remove(product.id)}} className="remove-btn">X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listproduct;