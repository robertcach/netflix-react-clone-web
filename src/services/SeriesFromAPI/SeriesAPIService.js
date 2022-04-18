import loadSeriesFromApi from "./BaseSeriesAPIService";
const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;


export const loadSeriesFromMoviesApi = (id) => loadSeriesFromApi.get(`/tv/${id}?api_key=${API_KEY}&language=en-US`);
export const castSeriesFromMoviesApi = (id) => loadSeriesFromApi.get(`/tv/${id}/credits?api_key=${API_KEY}&language=en-US`);