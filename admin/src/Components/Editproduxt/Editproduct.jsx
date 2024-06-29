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

// // export default EditProduct
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Editproduct.css';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productDetails, setProductDetails] = useState({
    title: '',
    year: '',
    runtime: '',
    trailer:'',
    genres: [],
    director: '',
    actors: '',
    plot: '',
    videoUrl: {
      video1: '',
      video2: '',
      video3: '',
      video4: ''
    }
  });

  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:2000/product/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.error('Error fetching product:', error);
        // Handle error scenarios (e.g., display an error message to the user)
      }
    };

    fetchProduct();
  }, [id]);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('videoUrl')) {
      const videoUrlField = name.split('.')[1]; // Extract the specific videoUrl field (video1, video2, ...)
      setProductDetails({
        ...productDetails,
        videoUrl: {
          ...productDetails.videoUrl,
          [videoUrlField]: value
        }
      });
    } else {
      setProductDetails({ ...productDetails, [name]: value });
    }
  };

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

  const updateProduct = async () => {
    const isConfirmed = window.confirm('Are you sure that you want to edit this product?');
    if (isConfirmed) {
      try {
        // Send updated productDetails to server
        const response = await fetch(`http://localhost:2000/updateproduct/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(productDetails)
        });

        if (!response.ok) {
          throw new Error('Failed to update product');
        }

        const data = await response.json();
        if (data.success) {
          // Navigate to the genre list page after successful update
          navigate('/genrelist');
        } else {
          throw new Error('Update operation failed on the server');
        }
      } catch (error) {
        console.error('Error updating product:', error);
        // Handle error scenarios (e.g., display an error message to the user)
      }
    }
  };

  return (
    <div className='edit-product'>
      <h1>Edit product</h1>
      <img src={productDetails.posterUrl} alt="" />
      <div className="addproduct-itemfield">
        <p>Title</p>
        <input type="text" value={productDetails.title} name="title" onChange={changeHandler}/>
      </div>
      <div className="addproduct-runtie">
        <div className="addproduct-itemfield">
          <p>Year</p>
          <input type="number" value={productDetails.year} name="year" onChange={changeHandler}/>
        </div>
        <div className="addproduct-itemfield">
          <p>runtime</p>
          <input type="number" value={productDetails.runtime} name="runtime" onChange={changeHandler}/>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Trailer</p>
        <input type="text" value={productDetails.trailer} name="trailer" onChange={changeHandler}/>
      </div>
      <div className="addproduct-itemfield">
        <p>Genres</p>
        <div className="addproduct-genres">
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="">Select a genre</option>
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
        <input type="text" value={productDetails.director} name="director" onChange={changeHandler}/>
      </div>
      <div className="addproduct-itemfield">
        <p>Actors</p>
        <input type="text" value={productDetails.actors} name="actors" onChange={changeHandler}/>
      </div>
      <div className="addproduct-itemfield">
        <p>Plot</p>
        <textarea name="plot" value={productDetails.plot} onChange={changeHandler}></textarea>
      </div>
      <div className="addproduct-itemfield">
        <p>Video 1 URL</p>
        <input type="text" value={productDetails.videoUrl.video1} name="videoUrl.video1" onChange={changeHandler} />
      </div>
      <div className="addproduct-itemfield">
        <p>Video 2 URL</p>
        <input type="text" value={productDetails.videoUrl.video2} name="videoUrl.video2" onChange={changeHandler} />
      </div>
      <div className="addproduct-itemfield">
        <p>Video 3 URL</p>
        <input type="text" value={productDetails.videoUrl.video3} name="videoUrl.video3" onChange={changeHandler} />
      </div>
      <div className="addproduct-itemfield">
        <p>Video 4 URL</p>
        <input type="text" value={productDetails.videoUrl.video4} name="videoUrl.video4" onChange={changeHandler} />
      </div>
     
      <button className='button' onClick={updateProduct}>Update Product</button>
    </div>
  );
};
// posterUrl ? URL.createObjectURL(posterUrl) : upload_area
export default EditProduct;
