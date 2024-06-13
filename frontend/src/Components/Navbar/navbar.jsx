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
  
  return (
    <div>
      <div className="navbar">
        <button className='nav-btn' onClick={shownavbar}>
      <BiAlignJustify />
      </button>
        <div className="nav-logo">
            <h1>Movie</h1>
        </div>
        <div className="nav-menu" ref={menuref} >
            <ul ref={navref} className='navul'>
            <button onClick={remove} className='nav-btn close'>
            <AiOutlineClose />
      </button>
                <li><Link to="/">Movies  <BiMoviePlay style={{marginLeft:"5px"}}/></Link></li>
                <li><Link to="#">Serials  <BiCameraMovie style={{marginLeft:"5px"}}/> </Link></li>
                <li>
                  <Link to="#" onClick={() => setDropdownVisible(!dropdownVisible)}>
                    
                  <MdArrowDropDown />
                     Zhanre 
                    
                 <FaRegCircle style={{marginLeft:"5px"}}/></Link> 
                
                
                  
           {dropdownVisible && <Dropdown  />}</li>
           <li><Link to="#"  onClick={() => setDropdownVisibleyear(!dropdownVisibleyear)}>
           <MdArrowDropDown />
           Year 
           <GiCalendarHalfYear style={{marginLeft:"5px"}} />
           </Link>
           {dropdownVisibleyear && <Dropdownyear/>}
           </li>
                <li><Link  to='/favourites'>Favourites  <GrFavorite style={{marginLeft:"5px"}} /></Link><span>{getTotalCartItem()}</span></li>
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
