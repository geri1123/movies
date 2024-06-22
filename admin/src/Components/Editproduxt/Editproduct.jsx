// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './Editproduct.css'
// const EditProduct = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
  
//   const [productDetails, setProductDetails] = useState({
//     title: '',
//     year: '',
//     runtime: '',
//     genres: [],
//     director: '',
//     actors: '',
//     plot: '',
   
//   });
//   const [selectedGenre, setSelectedGenre] = useState("")
//   const [errorMessage, setErrorMessage] = useState("");
//   const addGenre = () => {
//     if (selectedGenre && !productDetails.genres.includes(selectedGenre)) {
//         setProductDetails({ ...productDetails, genres: [...productDetails.genres, selectedGenre] });
//         setSelectedGenre("");
//     }
// };

// const removeGenre = (index) => {
//     const updatedGenres = productDetails.genres.filter((_, i) => i !== index);
//     setProductDetails({ ...productDetails, genres: updatedGenres });
// };
//   useEffect(() => {
//     const fetchProduct = async () => {
//       const response = await fetch(`http://localhost:2000/product/${id}`);
//       const data = await response.json();
//       setProductDetails(data);
//     };

//     fetchProduct();
//   }, [id]);

//   const changeHandler = (e) => {
//     setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//   };

  

//   const updateProduct = async () => {
   
    
//     setErrorMessage(""); 
//     await fetch(`http://localhost:2000/updateproduct/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(productDetails)
//     });
//     navigate('/genrelist');
//   };

 
//   return (
//     <div className='edit-product'>
//         <h1>Edit product</h1>
//       <div className="addproduct-itemfield">
//         <p>Title</p>
//         <input type="text" value={productDetails.title} name="title" onChange={changeHandler}/>

//       </div>
//       <div className="addproduct-runtie">
//       <div className="addproduct-itemfield">
//         <p>Year</p>
//         <input type="number" value={productDetails.year} name="year" onChange={changeHandler}/>

//       </div>
//       <div className="addproduct-itemfield">
//         <p>runtime</p>
//         <input type="number" value={productDetails.runtime} name="runtime" onChange={changeHandler}/>

//       </div>
//       </div>
//       <div className="addproduct-itemfield">
//                 <p>Genres</p>
//                 <div className="addproduct-genres">
//                     < select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
//                         <option value="">Select a genre</option>
//                         <option value="Comedy">Comedy</option>
//                         <option value="Fantasy">Fantasy</option>
//                         <option value="Crime">Crime</option>
//                         <option value="Drama">Drama</option>
//                         <option value="Music">Music</option>
//                         <option value="Adventure">Adventure</option>
//                         <option value="History">History</option>
//                         <option value="Thriller">Thriller</option>
//                         <option value="Animation">Animation</option>
//                         <option value="Family">Family</option>
//                         <option value="Mystery">Mystery</option>
//                         <option value="Biography">Biography</option>
//                         <option value="Action">Action</option>
//                         <option value="Film-Noir">Film-Noir</option>
//                         <option value="Romance">Romance</option>
//                         <option value="Sci-Fi">Sci-Fi</option>
//                         <option value="War">War</option>
//                         <option value="Western">Western</option>
//                         <option value="Horror">Horror</option>
//                         <option value="Musical">Musical</option>
//                         <option value="Sport">Sport</option>
//                     </select>
//                     <button type="button" onClick={addGenre}>Add Genre</button>
//                 </div>
//                 <ul>
//                     {productDetails.genres.map((genre, index) => (
//                         <li key={index}>
//                             {genre} <button type="button" onClick={() => removeGenre(index)}>Remove</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//       <div className="addproduct-itemfield">
//         <p>Director</p>
//         <input type="text" value={productDetails.director} name="director" onChange={changeHandler}/>

//       </div>
//       <div className="addproduct-itemfield">
//         <p>Actors</p>
//         <input type="text" value={productDetails.actors} name="actors" onChange={changeHandler}/>

//       </div>
//       <div className="addproduct-itemfield">
//         <p>Plot</p>
//        <textarea name="plot" value={productDetails.plot}  onChange={changeHandler}>

//        </textarea>

//       </div>
     
//       <button className='button' onClick={updateProduct}>Update Product</button>
//     </div>
//   );
// };

// export default EditProduct
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Editproduct.css';
import upload_area from '../../assets/upload_area.svg'; // Adjust the path if necessary

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productDetails, setProductDetails] = useState({
    title: '',
    year: '',
    runtime: '',
    genres: [],
    director: '',
    actors: '',
    plot: '',
    posterUrl: ''
  });

  const [selectedGenre, setSelectedGenre] = useState("");
  const [posterUrl, setPosterUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const addGenre = () => {
    if (selectedGenre && !productDetails.genres.includes(selectedGenre)) {
      setProductDetails({ ...productDetails, genres: [...productDetails.genres, selectedGenre] });
      setSelectedGenre("");
    }
  };

  const removeGenre = (index) => {
    const updatedGenres = productDetails.genres.filter((_, i) => i !== index);
    setProductDetails({ ...productDetails, genres: updatedGenres });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:2000/product/${id}`);
      const data = await response.json();
      setProductDetails(data);
    };

    fetchProduct();
  }, [id]);

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setPosterUrl(e.target.files[0]);
  };

  const updateProduct = async () => {
    const isConfirmed=window.confirm('are you sure you want to update this movie?')
if(isConfirmed){
    setErrorMessage("");

    if (posterUrl) {
      let formData = new FormData();
      formData.append('product', posterUrl);

      const response = await fetch('http://localhost:2000/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.success) {
        productDetails.posterUrl = responseData.image_url;
      } else {
        setErrorMessage("Failed to upload new poster image.");
        return;
      }
    }

    await fetch(`http://localhost:2000/updateproduct/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productDetails)
    });

    navigate('/genrelist');
}
  };

  return (
    <div className='edit-product'>
      <h1>Edit product</h1>
      <div className="addproduct-itemfield">
        <p>Title</p>
        <input type="text" value={productDetails.title} name="title" onChange={changeHandler} />
      </div>
      <div className="addproduct-runtime">
        <div className="addproduct-itemfield">
          <p>Year</p>
          <input type="number" value={productDetails.year} name="year" onChange={changeHandler} />
        </div>
        <div className="addproduct-itemfield">
          <p>Runtime</p>
          <input type="number" value={productDetails.runtime} name="runtime" onChange={changeHandler} />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Genres</p>
        <div className="addproduct-genres">
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="">Select a genre</option>
            {/* Add your genre options here */}
            <option value="Comedy">Comedy</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Music">Music</option>
            <option value="Adventure">Adventure</option>
            <option value="History">History</option>
            <option value="Thriller">Thriller</option>
            <option value="Animation">Animation</option>
            <option value="Family">Family</option>
            <option value="Mystery">Mystery</option>
            <option value="Biography">Biography</option>
            <option value="Action">Action</option>
            <option value="Film-Noir">Film-Noir</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="War">War</option>
            <option value="Western">Western</option>
            <option value="Horror">Horror</option>
            <option value="Musical">Musical</option>
            <option value="Sport">Sport</option>
          </select>
          <button type="button" onClick={addGenre}>Add Genre</button>
        </div>
        <ul>
          {productDetails.genres.map((genre, index) => (
            <li key={index}>
              {genre} <button type="button" onClick={() => removeGenre(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="addproduct-itemfield">
        <p>Director</p>
        <input type="text" value={productDetails.director} name="director" onChange={changeHandler} />
      </div>
      <div className="addproduct-itemfield">
        <p>Actors</p>
        <input type="text" value={productDetails.actors} name="actors" onChange={changeHandler} />
      </div>
      <div className="addproduct-itemfield">
        <p>Plot</p>
        <textarea name="plot" value={productDetails.plot} onChange={changeHandler} />
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={posterUrl ? URL.createObjectURL(posterUrl) : (productDetails.posterUrl || upload_area)} className='addproduct-thumbnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='posterUrl' id='file-input' hidden />
      </div>
      {errorMessage && <p style={{ color: "red" }} className="error-message">{errorMessage}</p>}
      <button className='button' onClick={updateProduct}>Update Product</button>
    </div>
  );
};

export default EditProduct;