import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { deleteMovie } from '../../services/MovieService';
import './Profile.scss';

const Profile = () => {
  const { user, getUser } = useAuthContext();

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
    </div>
  )
}

export default Profile;