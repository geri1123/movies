
import './App.css';
import {BrowserRouter as Router , Route  , Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/navbar'

import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Footer from './Components/Footer/Footer'
import MoviesDetail from './pages/MoviesDetail';
import Genres from './pages/Genres';
import Year from './pages/Year';
 import Default from './pages/Default';
import Azh from './Components/Movies/Azh';
import SearchResults from './pages/SearchResults ';
import Movies from './Components/Movies/Movies';
import Trending from './Components/Movies/Trending';
function App() {
  

  return (
    <Router>
    <div className="App" >
        <Navbar/>
        <div className='content' >
          <Switch>
          <Route exact path="/">
                <Home/>
          </Route>
          <Route path='/favourites'>
            <Favourites/>
          </Route>
          <Route path='/movies'>
          <Movies/>
          </Route>

          <Route path="/MoviesDetail/:movieId/:movietitle:movieyear">
            <MoviesDetail/>
          </Route>

          <Route path="/genre/:name" >
          <Genres/>
          </Route>
          <Route path="/year/:startYear/:endYear">
            <Year/>
          </Route>
          <Route path="/search/:searchQuery">
          <SearchResults/>
          </Route>
          <Route path="/azh">
          <Azh/>
          </Route>
          <Route path="/trending">
          <Trending/>
          </Route>
           <Route path="*">
            <Default/>

          </Route> 
          
          </Switch>
       </div>

       <Footer/>
    </div>
    </Router>
  );
}

export default App;
