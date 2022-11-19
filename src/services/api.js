import axios from 'axios';

//Base of URL:
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

//this one is the api  full url
//https://api.themoviedb.org/3/movie/now_playing?api_key=1187c2c41e8491b536e9e0e85902e637
export default api;