import React , {useState} from 'react'
import './Addproduct.css'
import upload_area from '../../assets/upload_area.svg'
const Addproduct = () => {
    const [posterUrl , setPosterUrl]=useState(false);
    const [productDetails , setProductDetails]=useState({
        title:"",
        year:"",
        runtime:"",
        trailer: "",
        genres: [],
        director:"",
        actors:"",
        plot:"",
        posterUrl:"",
        
    });
    const [videoUrls, setVideoUrls] = useState({
      video1: "",
      video2: "",
      video3: "",
      video4: "",
  });

    const imageHandler=(e)=>{
      setPosterUrl(e.target.files[0]);
  }
  const changeHandler=(e)=>{
      setProductDetails({...productDetails , [e.target.name]:e.target.value})
  }
  const changeVideoUrlHandler =(e)=>{
    setVideoUrls({...videoUrls , [e.target.name]:e.target.value })
  }
  const [selectedGenre, setSelectedGenre] = useState("")
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


const validateFields = () => {
  const { title, year, runtime, trailer , director, actors, plot, genres } = productDetails;
  if (!title || !year || !runtime || !trailer ||  !director || !actors || !plot || genres.length === 0 || !posterUrl) {
      return false;
  }
  if (!videoUrls.video1 || !videoUrls.video2 || !videoUrls.video3 || !videoUrls.video4) {
    return false;
  }
  
  return true;
};

const Add_Product= async ()=>{
  if (!validateFields()) {
    setErrorMessage("Please fill in all fields.");
    return;
}

setErrorMessage(""); // Clear any existing error messages
  console.log(productDetails);
  let responseData;
  let product=productDetails;
  let formData=new FormData();
  
  formData.append('product' ,posterUrl);
  await fetch('http://localhost:2000/upload', {
    method:'POST',
    
      headers:{
        Accept:'application/json',
      },
      body:formData,


    
  }).then((resp)=>resp.json()).then((data)=>{responseData=data})

  if(responseData.success){
    // product.posterUrl=responseData.image_url;
    const product = {
      ...productDetails,
      posterUrl: responseData.image_url,
      videoUrl: {
          video1: videoUrls.video1,
          video2: videoUrls.video2,
          video3: videoUrls.video3,
          video4: videoUrls.video4,
      },
  };
    // console.log(product);
    await fetch('http://localhost:2000/addproduct', {
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(product),

      
    }).then((resp)=>resp.json()).then((data)=>{
      // data.success?alert("Product added"):alert("Failed")
      if(data.success){
        alert("Product added");
        setProductDetails({
          title:"",
          year:"",   
          runtime:"",
          trailer:"",
          genres: [],
          director:"",
          actors:"",
          plot:"",
          
        });
        setVideoUrls({
          video1: "",
          video2: "",
          video3: "",
          video4: "",
      });
        setPosterUrl(false);
      } else{
        alert("Failed to add product");
      }
      
    })
  }
  

}
  
  return (
    <div className='add-product'>
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
        <input type="text" placeholder="https://www.youtube.com/embed/..." value={productDetails.trailer} name="trailer" onChange={changeHandler}/>

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
                <p>Video 1 URL</p>
                <input type="text" value={videoUrls.video1} name="video1" onChange={changeVideoUrlHandler} />
            </div>
            <div className="addproduct-itemfield">
                <p>Video 2 URL</p>
                <input type="text" value={videoUrls.video2} name="video2" onChange={changeVideoUrlHandler} />
            </div>
            <div className="addproduct-itemfield">
                <p>Video 3 URL</p>
                <input type="text" value={videoUrls.video3} name="video3" onChange={changeVideoUrlHandler} />
            </div>
            <div className="addproduct-itemfield">
                <p>Video 4 URL</p>
                <input type="text" value={videoUrls.video4} name="video4" onChange={changeVideoUrlHandler} />
            </div>
      <div className="addproduct-itemfield">
        <p>Plot</p>
       <textarea name="plot" value={productDetails.plot}  onChange={changeHandler}>

       </textarea>

      </div>
      <div className="addproduct-itemfield">
      <label htmlFor="file-input">
            <img src={posterUrl ? URL.createObjectURL(posterUrl) : upload_area} className='addproduct-thumnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='posterUrl' id='file-input' hidden />
      </div>
      {errorMessage && <p style={{color:"red"}} className="error-message">{errorMessage}</p>}
      <button className='addproduct-btn' onClick={()=>{Add_Product()}}>Add</button>
    </div>
  )
}

export default Addproduct
