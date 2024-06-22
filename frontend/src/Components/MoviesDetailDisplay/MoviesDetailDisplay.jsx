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

import React, { useContext, useState } from 'react';
import './MoviesDetailDisplay.css';
import { MoviesContext } from '../../Context/MovieContext';
import { FiYoutube } from "react-icons/fi";
import { Link } from 'react-router-dom/cjs/react-router-dom';

const MoviesDetailDisplay = (props) => {
  const { product } = props;
  const { AddToCart, RemoveFromCart, CartItem } = useContext(MoviesContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(product.comments || []);
  const isAlreadyInCart = CartItem[product.id] > 0;

  if (!product) {
    return null; // or a loading/error message
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:2000/addcomment/${product.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, comment }),
    });

    if (response.ok) {
      const newComment = { name, email, comment, date: new Date() };
      setComments([...comments, newComment]);
      setName('');
      setEmail('');
      setComment('');
    } else {
      console.error('Failed to add comment');
    }
  };

  return (
  <div className="alldisplay">

  
    <div className='moviedetaildisplay'>
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
      
    </div>
    <div className="comments">
        <div className="formcomm">
          <h2>Add Comment</h2>
          <form onSubmit={handleSubmit}>
            <p>Email</p>
            <input
              type="email"
              placeholder='example@email.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p>Name</p>
            <input
              type="text"
              placeholder='Name..'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <p>Comment</p>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        
        <div className="userscomments">
          
          {product.comments.map((c, i) => (
            <div className="com" key={i}>
              <h4>{c.name}:</h4>
              <p className='p-comment'>{c.comment}</p>
              <p>{new Date(c.date).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</p>
            </div>
          ))}
        </div>
        
      </div>
  </div>    
  );
};

export default MoviesDetailDisplay;