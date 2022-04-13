import loadMoviesFromApi from "./BaseMovieAPIService";
const API_KEY = "1bfe9a580a6c5aac4db755efd678b13e";

export const moviesListFromAPI = () => loadMoviesFromApi.get(`/trending/all/day?api_key=${API_KEY}`)