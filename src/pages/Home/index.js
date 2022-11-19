import { useEffect, useState } from 'react';
import api from '../../services/api'

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
            console.log(response);
        }
        loadMovies();
    },[])

    return(
        <div>Welcome to Home Page</div>
    )
}

export default Home;