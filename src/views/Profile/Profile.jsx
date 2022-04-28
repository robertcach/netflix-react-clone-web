import { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { trendingMoviesFromAPI, netflixOriginalsMoviesFromAPI, topRatedMoviesFromAPI, actionMoviesFromAPI } from '../../services/MoviesFromAPI/MovieAPIService';
import MovieCard from '../../components/MovieCard/MovieCard';
import UserLoginBanner from '../../components/UserLogginBanner/UserLoginBanner';
import './Profile.scss';

const Profile = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [netflixMovies, setTNetflixMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [actionMovies, setActionMovies] = useState([])
  const [randomMovie, setRandomMovie] = useState([])
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    trendingMoviesFromAPI()
      .then(response => setTrendingMovies(response))
  }, [])

  useEffect(() => {
    netflixOriginalsMoviesFromAPI()
      .then(response => setTNetflixMovies(response))
  },[])

  useEffect(() => {
    topRatedMoviesFromAPI()
      .then(response => setTopRatedMovies(response))
  },[])

  useEffect(() => {
    actionMoviesFromAPI()
      .then(response => setActionMovies(response))
  },[])

  useEffect(() => {
    const randomMovieToBanner = trendingMovies[Math.floor(Math.random() * trendingMovies.length)]
    setRandomMovie(randomMovieToBanner)
  },[trendingMovies])


  return (
    <div>
      {randomMovie &&
        <UserLoginBanner title={randomMovie.title} name={randomMovie.name} overview={randomMovie.overview} image={randomMovie.backdrop_path}
        />
      }

      <div className="cards">
        <h2 className="cards__title">Trending now</h2>
        <div className="cards__single">
          {trendingMovies && trendingMovies.map(movie => {
            return (
              <MovieCard key={movie.id} image={movie.poster_path} title={movie.title} />
            )
          })}
        </div>
      </div>

      <div className="cards">
        <h2 className="cards__title">Only in Netflix</h2>
        <div className="cards__single">
          {netflixMovies && netflixMovies.map(movie => {
            return (
              <MovieCard key={movie.id} image={movie.poster_path} title={movie.title} />
            )
          })}
        </div>
      </div>

      <div className="cards">
        <h2 className="cards__title">Top Rated</h2>
        <div className="cards__single">
          {topRatedMovies && topRatedMovies.map(movie => {
            return (
              <MovieCard key={movie.id} image={movie.poster_path} title={movie.title} />
            )
          })}
        </div>
      </div>

      <div className="cards">
        <h2 className="cards__title">Action movies</h2>
        <div className="cards__single">
          {actionMovies && actionMovies.map(movie => {
            return (
              <MovieCard key={movie.id} image={movie.poster_path} title={movie.title} />
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Profile;