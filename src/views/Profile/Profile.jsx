import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { deleteMovie } from '../../services/MovieService';
import { moviesListFromAPI } from '../../services/MoviesFromAPI/MovieAPIService';
import './Profile.scss';

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
      <h1>{user.name} Profile</h1>

      <ul>
        {user.movies.map(movie => {
          return (
            <li key={movie.id} style={{marginBottom: '50px'}}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              <p>{movie.description}</p>
              <button onClick={() => handleDelete(movie.id)}>Delete movie</button>
            </li>
          )
        })}
      </ul>

      {moviesAPI && moviesAPI.map(movie => {
        return (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.overview}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Profile;