
import React, {  useRef } from 'react';
import { useEffect } from 'react';
import './Item.css';
// import { MoviesContext } from '../../Context/MovieContext';
import { Link } from 'react-router-dom/cjs/react-router-dom';

// import { FaRegHeart } from "react-icons/fa6";

const Items = (props) => {

  
  


  const itemRef = useRef();
  const descrRef = useRef();

  const showItem = () => {
    const descr = descrRef.current;
    descr.classList.add('mouseenter');
    
    // Get the bounding rect of the item and description elements
    const itemRect = itemRef.current.getBoundingClientRect();
    const descrRect = descr.getBoundingClientRect();
    
    // Check if the description overflows the viewport on the right
    if (itemRect.right + descrRect.width > window.innerWidth) {
      descr.style.left = `-${descrRect.width -10 }px`;
    // } else if (itemRect.left - descrRect.width < 0) { // Check if the description overflows the viewport on the left
      // descr.style.left = `${itemRect.width -22 }px`;
    } 
    // else {
    //    descr.style.left = '190px';
      

    // }
  };

  const hideItem = () => {
    descrRef.current.classList.remove('mouseenter');
  };

  // const isAlreadyInCart=CartItem[props.id]>0;
  
  const elementRef = useRef(null);

  const updateHeight = () => {
    if (elementRef.current) {
      const width = elementRef.current.offsetWidth;
      elementRef.current.style.height = `${1.5 * width}px`;
    }
  };

  useEffect(() => {
    // Update height on mount
    updateHeight();

    // Update height on window resize
    window.addEventListener('resize', updateHeight);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <div className="allitem movie-item"  ref={itemRef}>
     
      <div className='items' >
        <Link  to={`/MoviesDetail/${props.id}/${props.title}${props.year}`} onClick={() => window.scrollTo(0, 0)} >
          
        <img ref={elementRef} 
          onMouseEnter={showItem} 
          onMouseLeave={hideItem}
          src={props.posterUrl} 
          alt={props.title} 
        />
        <div className="title">
          <h3>{props.title}</h3>
          <h3>({props.year})</h3>
        </div></Link>
        <div className="genres">
        {props.genres.map((genre, index) => (
    <Link key={index} to={`/genre/${genre}`}><p >{genre}</p></Link> 
  ))}
        </div> 
        
       {/* <div className='HeartIcon' onClick={()=>{AddToCart(props.id)}}
          
    
        >
         <h3 className='plus'></h3>
      <FaRegHeart className='heart'/> */}
      {/* </div> */}
          {/* <button onClick={()=>{AddToCart(props.id)} }
         disabled={isAlreadyInCart} 
        className={isAlreadyInCart? 'Added':''}
        >
          {isAlreadyInCart ? 'Already in Favourites' : 'Add to Favourites'}
        </button>    */}
      
      
    
      </div>
      <div className="itemdescr" onMouseEnter={showItem} 
          onMouseLeave={hideItem}  ref={descrRef}>
        <div className='title2'>
        <h4>{props.title}</h4>
        <h4>({props.year})</h4>
        </div>
        <div className="runtime">
          <p>{props.year}</p>
          <p>{props.runtime} min</p>
        </div>
        <p>{props.plot}</p>
        <p>Genre:
        { props.genres.map((genre ,index)=>(
               <Link  key={index} to={`/genre/${genre}`} > <span>  {genre}</span></Link>

     ) )
        }
        </p>
        <p>Actors:<span> {props.actors}</span></p>
      </div>
    </div>
  );
};

export default Items;