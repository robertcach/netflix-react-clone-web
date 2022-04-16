import axios from 'axios';


const loadMoviesFromApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
})

loadMoviesFromApi.interceptors.response.use(
  response => response.data.results,
  error => Promise.reject(error)
)

export default loadMoviesFromApi;