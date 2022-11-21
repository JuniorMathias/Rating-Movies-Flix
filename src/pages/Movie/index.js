import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api'

function Movie(){
    //getting the params from routes.js 

    const { id } = useParams();
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

        })
    }
    loadMovie();
    return () => {
        
    }
}, [])
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
        </div>
    )
}

export default Movie;