import axios from 'axios';
import createHttp from '../BaseService';

const http = createHttp(true)

const loadMoviesFromApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
})

loadMoviesFromApi.interceptors.response.use(
  response => response.data.results,
  error => Promise.reject(error)
)

export default loadMoviesFromApi;