import { useAuthContext } from '../../contexts/AuthContext';
import './Profile.scss';

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h1>Profile</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  )
}

export default Profile;