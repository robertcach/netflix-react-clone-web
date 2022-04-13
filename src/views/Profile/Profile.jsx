import { useAuthContext } from '../../contexts/AuthContext';
import './Profile.scss';

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h1>Profile</h1>
{/*       <p>{JSON.stringify(user)}</p> */}
      <ul>
        {user.movies.map(movie => {
          return (
            <li key={movie._id} style={{marginBottom: '50px'}}>
              <h4>{movie.title}</h4>
              <p>{movie.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Profile;