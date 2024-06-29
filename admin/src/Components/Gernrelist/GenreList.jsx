//  import React, { useEffect, useState } from 'react';
//  import { GenresProdu } from './Genreprodu';
//  import './GenreList.css';
// import { Link } from 'react-router-dom';
//  const GenreList = () => {
//    const [product, setAllProduct] = useState([]);
//    const [searchGenre, setSearchGenre] = useState('');
//    const [searchMovie, setSearchMovie] = useState('');

//    const fetchmovie = async () => {
//      await fetch('http://localhost:2000/allproducts')
//        .then((resp) => resp.json())
//        .then((data) => {
//          setAllProduct(data);
//        });
//    };

//    useEffect(() => {
//      fetchmovie();
//    }, []);

//    const deletehandler = async (id) => {
//      const isConfirmed = window.confirm('Are you sure you want to delete this movie?');
//      if (isConfirmed) {
//        await fetch('http://localhost:2000/removeproduct', {
//          method: 'POST',
//          headers: {
//            Accept: 'application/json',
//            'Content-Type': 'application/json',
//          },
//          body: JSON.stringify({ id }),
//        });
//        await fetchmovie();
//      }
//    };

//    const filterMovies = () => {
//      let filteredMovies = product;

//      if (searchGenre) {
//        filteredMovies = filteredMovies.filter((movie) => movie.genres.includes(searchGenre));
//      }

//      if (searchMovie) {
//        filteredMovies = filteredMovies.filter((movie) =>
//          movie.title.toLowerCase().includes(searchMovie.toLowerCase())
//        );
//      }

//      return filteredMovies;
//    };

//    const filteredMovies = filterMovies();

//    return (
//      <div className="genrelist">
//        <div className="navgenre">
//          <h3 className={searchGenre === '' ? 'clicked' : ''} onClick={() => setSearchGenre('')}>
//            All movies
//          </h3>
//          {GenresProdu.map((genre) => {
//            return (
//              <h3
//                key={genre.id}
//                className={searchGenre === genre.name ? 'clicked' : ''}
//                onClick={() => {
//                  setSearchGenre(genre.name);
//                }}
//              >
//                {genre.name}
//              </h3>
//            );
//          })}
//        </div>
//        <div className="filter">
//          <div className="searched">
//            Search: {searchGenre === '' ? <h3>"All movies"</h3> : <h3>"{searchGenre}"</h3>}
//          </div>
//          <div className="searchfield">
//            <input
//              type="text"
//              value={searchMovie}
//              onChange={(e) => setSearchMovie(e.target.value)}
//              placeholder="Search for a movie..."
//            />
//            <h1 onClick={() => setSearchMovie('')}>X</h1>
//          </div>
//        </div>
//        <div className="searchedmovi">{searchMovie === '' ? <></> : <div>Searched :"{searchMovie}"</div>}</div>
//        <div className="moviedisplay">
//          {filteredMovies.length === 0 ? (
//            <div className="noprod">
//              <h4>There is no movie</h4>
//            </div>
//          ) : (
//            filteredMovies.map((movie, i) => (
//              <div className="movieitem" key={i}>
//                <button onClick={() => deletehandler(movie.id)}>Delete</button>
//                <img src={movie.posterUrl} alt="" />
//                <h5>{movie.title}</h5>
//                <Link to={`/editproduct/${movie.id}`}>Edit</Link> 
//              </div>
//            ))
//          )}
//        </div>
//      </div>
//    );
//  };

//  export default GenreList;






import React, { useEffect, useState } from 'react';
import { GenresProdu } from './Genreprodu';
import './GenreList.css';
import { Link } from 'react-router-dom';

const GenreList = () => {
  const [product, setAllProduct] = useState([]);
  const [searchGenre, setSearchGenre] = useState('');
  const [searchMovie, setSearchMovie] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const fetchmovie = async () => {
    await fetch('http://localhost:2000/allproducts')
      .then((resp) => resp.json())
      .then((data) => {
        setAllProduct(data);
      });
  };

  useEffect(() => {
    fetchmovie();
  }, []);

  const deletehandler = async (id) => {
    setShowConfirmDialog(true);
    setDeleteId(id);
  };

  const confirmDelete = async () => {
    setShowConfirmDialog(false);
    
      await fetch('http://localhost:2000/removeproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: deleteId }),
      });
      await fetchmovie();
    
  };

  const cancelDelete = () => {
    setShowConfirmDialog(false);
  };

  const filterMovies = () => {
    let filteredMovies = product;

    if (searchGenre) {
      filteredMovies = filteredMovies.filter((movie) => movie.genres.includes(searchGenre));
    }

    if (searchMovie) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchMovie.toLowerCase())
      );
    }

    return filteredMovies;
  };

  const filteredMovies = filterMovies();

  return (
    <div className="genrelist">
      <div className="navgenre">
        <h3 className={searchGenre === '' ? 'clicked' : ''} onClick={() => setSearchGenre('')}>
          All movies
        </h3>
        {GenresProdu.map((genre) => {
          return (
            <h3
              key={genre.id}
              className={searchGenre === genre.name ? 'clicked' : ''}
              onClick={() => {
                setSearchGenre(genre.name);
              }}
            >
              {genre.name}
            </h3>
          );
        })}
      </div>
      <div className="filter">
        <div className="searched">
          Search: {searchGenre === '' ? <h3>"All movies"</h3> : <h3>"{searchGenre}"</h3>}
        </div>
        <div className="searchfield">
          <input
            type="text"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            placeholder="Search for a movie..."
          />
          <h1 onClick={() => setSearchMovie('')}>X</h1>
        </div>
      </div>
      <div className="searchedmovi">
        {searchMovie === '' ? <></> : <div>Searched :"{searchMovie}"</div>}
      </div>
      <div className="moviedisplay">
        {filteredMovies.length === 0 ? (
          <div className="noprod">
            <h4>There is no movie</h4>
          </div>
        ) : (
          filteredMovies.map((movie, i) => (
            <div className="movieitem" key={i}>
              <button onClick={() => deletehandler(movie.id)}>Delete</button>
              <img src={movie.posterUrl} alt="" />
              <h5>{movie.title}</h5>
              <Link to={`/editproduct/${movie.id}`}>Edit</Link>
            </div>
          ))
        )}
      </div>
      {showConfirmDialog && (
        <div className="confirm-dialog">
          <div className="confirm-content">
            <p>Are you sure you want to delete this movie?</p>
            <div className="confirm-buttons">
              <button onClick={confirmDelete}>Yes</button>
              <button onClick={cancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreList;