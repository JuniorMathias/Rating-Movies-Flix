import { useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';
import './favorite.css';


function Favoritos(){
  const [movies, setMovies] = useState([])

  useEffect(()=>{

    const myList = localStorage.getItem("@myflix");
    setMovies(JSON.parse(myList) || [])

  }, [])


  function deleteMovie(id){
    let filterMovies = movies.filter( (item) => {
      return (item.id !== id);
    })

    setMovies(filterMovies);
    localStorage.setItem("@myflix", JSON.stringify(filterMovies) );
    toast.success("Movie deleted");
  }

  return(
    <div className="my-movies">
      <h1>My List</h1>

      {movies.length === 0 && <span>you have not movies saved:( </span>}

      <ul>
        {movies.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.title}</span>

              <div className='links'>
                <Link to={`/movie/${item.id}`}>See details</Link>
                <button onClick={() => deleteMovie(item.id) }>Delete</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos;