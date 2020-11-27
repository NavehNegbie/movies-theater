import axios from 'axios';

export const getMoviesApi = axios.get('http://localhost:3000/movies');
export const getMovieApi = (id) => axios.get(`http://localhost:3000/movies/${id}`);
