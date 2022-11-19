import { useEffect, useState } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';
import './style.css';


function Home(){
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function loadMovies(){ 
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "1187c2c41e8491b536e9e0e85902e637",
                    page: 1,
                }
            })
            setMovies(response.data.results.slice(0,10));
        }
        loadMovies();
    },[])

    return(
        <div className="container">
            <div className="movies-list">
                {movies.map((movie) =>{
                    return(
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/movie/${movie.id}`}> Acess</Link>
                        </article>
                    )
                })}
            </div>
        </div>

    )
}

export default Home;