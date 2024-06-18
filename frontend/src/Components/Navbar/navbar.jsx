import React, { useContext } from 'react'
import { MdArrowDropDown } from "react-icons/md";
import { GiCalendarHalfYear } from "react-icons/gi";
import { useRef, useEffect , useState} from 'react';
import { Link } from 'react-router-dom'
import { GrFavorite } from "react-icons/gr";
import { FaRegCircle } from "react-icons/fa6";
import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
import { BiAlignJustify } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Dropdown from './dropdown';
import Dropdownyear from './Dropdownyear';
import './navbar.css';
import { MoviesContext } from '../../Context/MovieContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


const Navbar = () => {
  
  const {getTotalCartItem}=useContext(MoviesContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisibleyear, setDropdownVisibleyear] = useState(false);
//for search
  const [searchQuery , setSearchQuery]=useState('');
  
//forsearch
    const navref =useRef();
    const menuref=useRef();
    const history=useHistory();
    const shownavbar=()=>{
        navref.current.classList.toggle('responsiblenav');
        menuref.current.classList.toggle('responsiblenav')

    }
    const remove=()=>{
        navref.current.classList.remove('responsiblenav');
        menuref.current.classList.remove('responsiblenav');
        setDropdownVisible(false);
        setDropdownVisibleyear(false);
    }
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navref.current && !navref.current.contains(event.target)) {
                remove();
            }
        };
    
        document.addEventListener("mousedown", handleOutsideClick);
    
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);


    const handleSearch = (e) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        history.push(`/search/${searchQuery}`);
        setSearchQuery('');
      }
    }
  

     const handleremovedropdown=(e)=>{
     
     setDropdownVisible(!dropdownVisible)
     }
     const handleremovedropdownyear=(e)=>{
       setDropdownVisibleyear(!dropdownVisibleyear)
      
     }
      

  return (
    <div>
      <div className="navbar">
        <button className='nav-btn' onClick={shownavbar}>
      <BiAlignJustify />
      </button>
        <div className="nav-logo">
            <h1><Link to="/"> Movie</Link></h1>
        </div>
        <div className="nav-menu" ref={menuref} >
            <ul ref={navref} className='navul'>
            <button onClick={remove} className='nav-btn close'>
            <AiOutlineClose />
      </button>
                <li><Link to="/" onClick={remove}> <BiMoviePlay style={{marginRight:"5px"}}/>Movies </Link></li>
                <li><Link to="#" onClick={remove}> <BiCameraMovie style={{marginRight:"5px"}}/>Serials  </Link></li>
                <li >
                  <Link to="#" onClick={ handleremovedropdown }>
                    <FaRegCircle style={{marginRight:"5px"}}/>
                 
                     Zhanre 
                     <MdArrowDropDown />
                 </Link> 
                
                
                  
           {dropdownVisible && <Dropdown remove={remove}  />}</li>
           <li><Link to="#"  onClick={ handleremovedropdownyear}>
           <GiCalendarHalfYear style={{marginRight:"5px"}} />
           Year 
           <MdArrowDropDown />
           </Link>
           {dropdownVisibleyear && <Dropdownyear remove={remove}/>}
           </li>
                <li><Link onClick={remove} to='/favourites'> <GrFavorite style={{marginRight:"5px"}}/>Favourites</Link><span>{getTotalCartItem()}</span></li>
            </ul>
        </div>
        <div className="search">
         
        <form onSubmit={handleSearch}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search...'
            />
            <button>Search</button>
          </form>
           
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
