import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api'
import './style.css';

function Movie(){
    //getting the params from routes.js 

    const { id } = useParams();
    const navigate = useNavigate();
    //gettint the movies also the loading page
    const [movie, setmovies] = useState({});
    const [loading, setLoading] = useState(true);

    //going to the movie chosen from the home page getting by id

useEffect(()=>{
    async function loadMovie(){
        await api.get(`movie/${id}`,{
        params:{
            api_key: "1187c2c41e8491b536e9e0e85902e637",
        }
        })
        .then((response)=>{
            setmovies(response.data);
            setLoading(false);
        })
        .catch(()=>{
            navigate("/", {replace:true});
            return;
        })
    }
    loadMovie();
    return () => {
        
    }
}, [navigate, id])
if(loading){
    return(
        <div className='info-movie'>
            <h1>loading details</h1>
        </div>
    )
}
    return(
        <div className='info-movie'>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

            <h3>Synopsis</h3>
            <span>{movie.overview}</span>
            <strong>Ratings: {movie.vote_average} /10</strong>

            <div className='buttons-area'>
                <button>Save</button>
                <button>
                    <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
                    Official Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Movie;