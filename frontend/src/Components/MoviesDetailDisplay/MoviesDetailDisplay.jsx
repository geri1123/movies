// import React, { useContext , useState } from 'react'
// import './MoviesDetailDisplay.css'
// import { MoviesContext } from '../../Context/MovieContext';
// import { FiYoutube } from "react-icons/fi";
// import { Link } from 'react-router-dom/cjs/react-router-dom';
// const MoviesDetailDisplay = (props) => {
//    const {product}=props;
//    const {AddToCart , RemoveFromCart , CartItem}=useContext(MoviesContext);
//    const [name, setName] = useState('');
//    const [email, setEmail] = useState('');
//    const [comment, setComment] = useState('');
//    const [comments, setComments] = useState(product.comments || []);
//    const isAlreadyInCart=CartItem[product.id]>0
//    if (!product) {
//     return null; // or a loading/error message
// }
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const response = await fetch(`http://localhost:2000/addcomment/${product.id}`, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, comment }),
//   });

//   if (response.ok) {
//       const newComment = { name, email, comment, date: new Date() };
//       setComments([...comments, newComment]);
//       setName('');
//       setEmail('');
//       setComment('');
//   } else {
//       console.error('Failed to add comment');
//   }
// };
//   return (
// <div className='moviedetaildisplay'  >
      
//             <div className="detailimg">
//              <img src={product.posterUrl} alt="" />
//             </div>
//        <div className="upper">

//             <div className="moviedetaildescription">
//                   <div className="mvdescrgenre">
//                           <h1>{product.title}({product.year})</h1>
//                         <div className="genredisplay">
//                            {product.genres.map((genre , i)=>(
//                           <Link to={`/genre/${genre}`}> <h2 key={i}>{genre}</h2></Link>
//                             ))}
//                         </div>
//                           <h3>{product.actors}</h3>
          
//                   </div>


//             <div className="movieright">
//                <div className="buttonMovie">
//                    <button 
//                     onClick={() => isAlreadyInCart ? RemoveFromCart(product.id) : AddToCart(product.id)}>
//                     {isAlreadyInCart ? 'Remove from favourites' :'Add to favourites'}
//                   </button>
//                </div>
//           <div className="runtime">
//             <h3>{product.runtime} min</h3>
//           </div>
         
//           <div className="trailer">
//             <h1><FiYoutube />Trailer</h1>
//           </div> 
//         </div>
//         </div>
//            <div className="plotdisplay">
//              <h2>{product.plot}</h2>
//            </div>
//   </div>
//   <div className="comments">
//   <div className="formcomm">
//                         <form onSubmit={handleSubmit}>
//                             <p>Email</p>
//                             <input
//                                 type="email"
//                                 placeholder='example@email.com'
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                             <p>Name</p>
//                             <input
//                                 type="text"
//                                 placeholder='Name..'
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                             />
//                             <p>Comment</p>
//                             <textarea
//                                 value={comment}
//                                 onChange={(e) => setComment(e.target.value)}
//                                 required
//                             ></textarea>
//                             <button type="submit">Submit</button>
//                         </form>
                        
//         </div>
//         <div className="userscomments">
//           {product.comments.map((c ,i)=>(

//             <div className="com" key={i}>
//            <p>{c.name}</p>
//            <p>{c.comment}</p>
//            <p>{new Date(c.date).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</p>
//            </div>
//           ))}
//         </div>
//         </div>
// </div>
//   )
// }

// export default MoviesDetailDisplay

// import React, { useContext, useState} from 'react';
// import './MoviesDetailDisplay.css';
// import { MoviesContext } from '../../Context/MovieContext';
// import { FiYoutube } from "react-icons/fi";
// import { Link } from 'react-router-dom/cjs/react-router-dom';

// const MoviesDetailDisplay = (props) => {
//   const { product } = props;
//   const { AddToCart, RemoveFromCart, CartItem } = useContext(MoviesContext);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [comment, setComment] = useState('');
  // const [comments, setComments] = useState(product.comments || []);
  //  const isAlreadyInCart = CartItem[product.id] > 0;
  //  const [selectedServer, setSelectedServer] = useState('video1');
  // if (!product) {
  //   return null; // or a loading/error message
  // }
  // const handleServerClick = (server) => {
  //   setSelectedServer(server);
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch(`http://localhost:2000/addcomment/${product.id}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, email, comment }),
  //   });

  //   if (response.ok) {
  //     const newComment = { name, email, comment, date: new Date() };
  //     setComments([...comments, newComment]);
  //     setName('');
  //     setEmail('');
  //     setComment('');
  //   } else {
  //     console.error('Failed to add comment');
  //   }
  // };

  // return (
  // <div className="alldisplay">

  
  //   <div className='moviedetaildisplay'>
  //     <div className="detailimg">
  //       <img src={product.posterUrl} alt="" />
  //     </div>
  //     <div className="upper">
  //       <div className="moviedetaildescription">
  //         <div className="mvdescrgenre">
  //           <h1>{product.title} ({product.year})</h1>
  //           <div className="genredisplay">
  //             {product.genres.map((genre, i) => (
  //               <Link to={`/genre/${genre}`} key={i}>
  //                 <h2>{genre}</h2>
  //               </Link>
  //             ))}
  //           </div>
  //           <h3>{product.actors}</h3>
  //         </div>

  //         <div className="movieright">
  //           <div className="buttonMovie">
  //             <button
  //               onClick={() => isAlreadyInCart ? RemoveFromCart(product.id) : AddToCart(product.id)}>
  //               {isAlreadyInCart ? 'Remove from favourites' : 'Add to favourites'}
  //             </button>
  //           </div>
  //           <div className="runtime">
  //             <h3>{product.runtime} min</h3>
  //           </div>
  //           <div className="trailer">
  //             <h1><FiYoutube /> Trailer</h1>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="plotdisplay">
  //         <h2>{product.plot}</h2>
  //       </div>
  //     </div>
      
  //   </div>
  //   <div className="serverurl">
  //     <div className="server">
  //       <h2 onClick={() => handleServerClick('video1')}>Server 1</h2>
  //       <h2 onClick={() => handleServerClick('video2')}>Server 2</h2>
  //       <h2 onClick={() => handleServerClick('video3')}>Server 3</h2>
  //       <h2 onClick={() => handleServerClick('video4')}>Server 4</h2>
  //     </div>
  //     <div className="iframe">
  //     {product.videoUrl[selectedServer]&& (
  //                 <iframe 
  //                 src={product.videoUrl[selectedServer]}  
                  
  //                 allowFullScreen 
  //                  title={`server ${selectedServer}`}></iframe>
  //               )}
  //     </div>

  //   </div>
    // <div className="comments"> 
    //     <div className="formcomm">
    //       <h2>Add Comment</h2>
    //       <form onSubmit={handleSubmit}>
    //         <p>Email</p>
    //         <input
    //           type="email"
    //           placeholder='example@email.com'
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           required
    //         />
    //         <p>Name</p>
    //         <input
    //           type="text"
    //           placeholder='Name..'
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //           required
    //         />
    //         <p>Comment</p>
    //         <textarea
    //           value={comment}
    //           onChange={(e) => setComment(e.target.value)}
    //           required
    //         ></textarea>
    //         <button type="submit">Submit</button>
    //       </form>
    //     </div> 
        
    //     // <div className="userscomments">
          
    //     //   {product.comments.map((c, i) => (
        //     <div className="com" key={i}>
        //       <h4>{c.name}:</h4>
        //       <p className='p-comment'>{c.comment}</p>
        //       <p>{new Date(c.date).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</p>
        //     </div>
        //   ))}
        // </div> 
        
      // </div> 
//   </div>    
//   );
// };

// export default MoviesDetailDisplay;

// import React, { useContext, useState } from 'react';
// import './MoviesDetailDisplay.css';
// import { MoviesContext } from '../../Context/MovieContext';
// import { FiYoutube } from "react-icons/fi";
// import { Link } from 'react-router-dom/cjs/react-router-dom';

// const MoviesDetailDisplay = (props) => {
//   const { product } = props;
//   const { AddToCart, RemoveFromCart, CartItem } = useContext(MoviesContext);
//   const isAlreadyInCart = CartItem[product.id] > 0;
//   const [selectedServer, setSelectedServer] = useState('video1');

//   if (!product) {
//     return null; // or a loading/error message
//   }

//   const handleServerClick = (server) => {
//      console.log("Selected server:", server);
//     setSelectedServer(server);
//     // if (server === 'video1') {
//     //   window.location.href = product.videoUrl.video1;
//     // } else if (server === 'video2') {
//     //   window.location.href = product.videoUrl.video2;
//     // } else if (server === 'video3') {
//     //   window.location.href = product.videoUrl.video3;
//     // } else if (server === 'video4') {
//     //   window.location.href = product.videoUrl.video4;
//     // }
//   };

//   return (
//     <div className="alldisplay">
//       <div className='moviedetaildisplay'>
//         <div className="detailimg">
//           <img src={product.posterUrl} alt="" />
//         </div>
//         <div className="upper">
//           <div className="moviedetaildescription">
//             <div className="mvdescrgenre">
//               <h1>{product.title} ({product.year})</h1>
//               <div className="genredisplay">
//                 {product.genres.map((genre, i) => (
//                   <Link to={`/genre/${genre}`} key={i}>
//                     <h2>{genre}</h2>
//                   </Link>
//                 ))}
//               </div>
//               <h3>{product.actors}</h3>
//             </div>

//             <div className="movieright">
//               <div className="buttonMovie">
//                 <button
//                   onClick={() => isAlreadyInCart ? RemoveFromCart(product.id) : AddToCart(product.id)}>
//                   {isAlreadyInCart ? 'Remove from favourites' : 'Add to favourites'}
//                 </button>
//               </div>
//               <div className="runtime">
//                 <h3>{product.runtime} min</h3>
//               </div>
//               <div className="trailer">
//                 <h1><FiYoutube /> Trailer</h1>
//               </div>
//             </div>
//           </div>
//           <div className="plotdisplay">
//             <h2>{product.plot}</h2>
//           </div>
//         </div>
//       </div>
//       <div className="serverurl">
//         <div className="server">
//          <h2 className={selectedServer ==='video1' ? 'selectedserver ': ''  } onClick={() => handleServerClick('video1')}>Server 1</h2>
//           <h2 onClick={() => handleServerClick('video2')}>Server 2</h2>
//           <h2 onClick={() => handleServerClick('video3')}>Server 3</h2>
//           <h2 onClick={() => handleServerClick('video4')}>Server 4</h2>
//         </div>
//         <div className="iframe">
//             {product.videoUrl[selectedServer] ? (
//     <iframe
//       src={ product.videoUrl[selectedServer] }
//       allowFullScreen
//       title={`server ${selectedServer}`}
//     ></iframe>
//   ) : (
//     <p>There is no video in {selectedServer}</p>
//   )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoviesDetailDisplay;
import React, { useContext, useRef, useState  } from 'react';
import { useEffect } from 'react';
import './MoviesDetailDisplay.css';
import { MoviesContext } from '../../Context/MovieContext';
import { FiYoutube} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { BsLightbulb } from "react-icons/bs";
const MoviesDetailDisplay = (props) => {
  const history=useHistory();
  const { product } = props;
  const { AddToCart, RemoveFromCart, CartItem } = useContext(MoviesContext);
  const isAlreadyInCart = CartItem[product.id] > 0;
  const [selectedServerIndex, setSelectedServerIndex] = useState(0);
  const iframeref = useRef();
  const youref = useRef();

  
  useEffect(() => {
    // Function to handle clicks outside iframe
    const handleClickOutside = (event) => {
      if (
       
        !iframeref.current.contains(event.target)
      ) {
        // Click happened outside of iframe and youtube-container
        removeyoutube();
      }
    };
  
    // Attach the event listener on mount
    document.addEventListener("mousedown", handleClickOutside);
  
    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  


  const handleServerClick = (index) => {
    setSelectedServerIndex(index);
    const server = `server${index + 1}`;
    const currentPath = history.location.pathname;
    const currentSearch = new URLSearchParams(history.location.search);
    currentSearch.set('server', server);
    const newUrl = `${currentPath}?${currentSearch.toString()}`;
    history.push(newUrl);
  };
  const shareOnWhatsApp = () => {
    const shareUrl = `https://api.whatsapp.com/send?text=Check%20out%20this%20movie%3A%20${encodeURIComponent(
      product.title
    )}%20(${product.year})%0A%0A${history.location.href}`;
    window.open(shareUrl, '_blank');
  };
 
   const handleyoutube=()=>{
    youref.current.classList.toggle('responsibleyoutube');
    document.body.style.overflow = 'hidden';
   }
const removeyoutube=()=>{
  youref.current.classList.remove('responsibleyoutube');
  document.body.style.overflow = 'auto';
  const iframe = youref.current.querySelector('iframe');
  if (iframe) {
    const iframeSrc = iframe.src;
    iframe.src = iframeSrc; // This will effectively reset the iframe and pause the video
  }
}
  
  if (!product) {
    return null; // or a loading/error message
  }
  return (
    <div className="alldisplay" >
      {/* productdetails */}
      <div className="youtube-container" ref={youref}>
      
  <div className="youtube" ref={iframeref}>
  <h1 className='youtubeh1' onClick={removeyoutube}>X</h1>
    <iframe
      width="560"
      height="315"
      src={product.trailer}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</div>
      <div className="productdetails">
       
       <div className="productdetailgrid"> 
        {/* detailimg */}
        <div className="detailImg">
          <img src={product.posterUrl} alt="" />
        </div>
        {/* enddetailimg */}
        
       <div className="flexproduct">
        {/* productdetailrightgrid */}
        <div className="productdetailrightgrid">
          {/* titlegenreactordirectors */}
          <div className="titlegenreactordirector">
          <h1>{product.title} ({product.year})</h1>
              <div className="genredisplay">
                {product.genres.map((genre, i) => (
                  <Link to={`/genre/${genre}`} key={i}>
                    <h2>{genre}</h2>
                  </Link>
                ))}
              </div>
              <h3>{product.actors}</h3>
              <h3>{product.director}</h3>
          </div>
          {/* end titlegenreactordirectors */}
          {/* traileraddruntime */}
          <div className="traileraddruntime">
          <div className="buttonMovie">
                <button
                  onClick={() => isAlreadyInCart ? RemoveFromCart(product.id) : AddToCart(product.id)}>
                  {isAlreadyInCart ? 'Remove from favourites' : 'Add to favourites'}
                </button>
              </div>
              <div className="runtime">
                <h3>{product.runtime} min</h3>
              </div>
              <div className="trailer">
                <h1 onClick={handleyoutube}><FiYoutube /> Trailer</h1>
              </div>

          </div>
          {/* end traileraddruntime */}
         
        </div>
        {/* endproductdetailrightgrid */}
        <div className="plot">
          <p>{product.plot}</p>
        </div>
        </div> 
      </div> 
      {/* endproductdetailgrid */}
      
      </div>
      {/* end productdetails */}

      {/* serverurl */}
      <div className="serverurl">
        {/* server */}
              <div className="server">
                {Object.keys(product.videoUrl).map((server, index) => (
                 <h2
                     key={index}
                     className={selectedServerIndex === index ? 'selectedserver' : 'h2'}
                    onClick={() => handleServerClick(index)}
                     >
                    Server {index + 1}
                 </h2>
               ))}
              </div>
         {/* end server*/}

              {/* iframe */}
              <div className="iframe">
                   {Object.values(product.videoUrl)[selectedServerIndex] ? (
                  <iframe
                    src={Object.values(product.videoUrl)[selectedServerIndex]}
                    allowFullScreen
                    title={`server ${selectedServerIndex + 1}`}
                   ></iframe>
           
          
                  ) : (
                    <p>There is no video in Server {selectedServerIndex + 1}</p>
                   )}
                </div>
                {/* end iframe */}
                <div className="options">
                  <div className="share">
                    <Link onClick={shareOnWhatsApp}><p><FaWhatsapp/> Share</p></Link>
                  </div>
                
                </div>
      </div>
      {/* end server url */}
    </div>
    // endalldisplay
  );
};

export default MoviesDetailDisplay;

 {/* <div className='moviedetaildisplay'>
        <div className="detailimg">
          <img src={product.posterUrl} alt="" />
        </div>
        <div className="upper">
          <div className="moviedetaildescription">
            <div className="mvdescrgenre">
              <h1>{product.title} ({product.year})</h1>
              <div className="genredisplay">
                {product.genres.map((genre, i) => (
                  <Link to={`/genre/${genre}`} key={i}>
                    <h2>{genre}</h2>
                  </Link>
                ))}
              </div>
              <h3>{product.actors}</h3>
            </div>

            <div className="movieright">
              <div className="buttonMovie">
                <button
                  onClick={() => isAlreadyInCart ? RemoveFromCart(product.id) : AddToCart(product.id)}>
                  {isAlreadyInCart ? 'Remove from favourites' : 'Add to favourites'}
                </button>
              </div>
              <div className="runtime">
                <h3>{product.runtime} min</h3>
              </div>
              <div className="trailer">
                <h1><FiYoutube /> Trailer</h1>
              </div>
            </div>
          </div>
          <div className="plotdisplay">
            <h2>{product.plot}</h2>
          </div>
        </div>
      </div> */}