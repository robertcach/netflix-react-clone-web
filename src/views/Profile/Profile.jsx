import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { deleteMovie } from '../../services/MovieService';
import { moviesListFromAPI } from '../../services/MoviesFromAPI/MovieAPIService';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Profile.scss';
import UserLoginBanner from '../../components/UserLogginBanner/UserLoginBanner';

const Profile = () => {
  const [moviesAPI, setMoviesAPI] = useState([])
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    moviesListFromAPI()
      .then(response => setMoviesAPI(response))
      console.log(moviesAPI)
  },[])

  const handleDelete = (id) => {
    deleteMovie(id)
      .then(() => {
        getUser();
      })
  }

  return (
    <div>
      <UserLoginBanner />
{/*       <h1>{user.name} Profile</h1> */}
{/*       <ul>
        {user.movies.map(movie => {
          return (
            <li key={movie.id} style={{marginBottom: '50px'}}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              <p>{movie.description}</p>
              <button onClick={() => handleDelete(movie.id)}>Delete movie</button>
            </li>
          )
        })}
      </ul> */}

      <div className="cards">
        <h2 className="cards__title">Tendencias ahora</h2>
        <div className="cards__single">
          {moviesAPI && moviesAPI.map(movie => {
            return (
              <MovieCard key={movie.id} image={movie.poster_path} title={movie.title} />
            )
          })}
        </div>
      </div>

      <div className="cards">
        <h2 className="cards__title">Only in Netflix</h2>
        <div className="cards__single">
          {moviesAPI && moviesAPI.map(movie => {
            return (
              <MovieCard key={movie.id} image={movie.poster_path} title={movie.title} />
            )
          })}
        </div>
      </div>

      <div className="cards">
        <h2 className="cards__title">Series TV</h2>
        <div className="cards__single">
          {moviesAPI && moviesAPI.map(movie => {
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