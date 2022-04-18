import axios from 'axios';

const loadSeriesFromApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
})

loadSeriesFromApi.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

export default loadSeriesFromApi;