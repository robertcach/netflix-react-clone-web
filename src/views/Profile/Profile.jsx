import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import './Profile.scss';

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h1>{user.name} Profile</h1>

      <ul>
        {user.movies.map(movie => {
          return (
            <li key={movie.id} style={{marginBottom: '50px'}}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              <p>{movie.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Profile;