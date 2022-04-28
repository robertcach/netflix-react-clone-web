import { useAuthContext } from '../../../contexts/AuthContext';
import { deleteMovie } from '../../../services/MovieService';
import './MyMoviesList.scss'

const MyMoviesList = () => {
  const { user, getUser } = useAuthContext();

  const handleDelete = (id) => {
    deleteMovie(id)
      .then(() => {
        getUser()
      })
  }


  return (
    <div>
{/*       {user && <h1>{user.name} Profile</h1>} */}

      {user && (
        <>
          <h1>{user.name} Profile</h1>
          <p>Your movies list</p>
        </>
      )}
          
        { user && user.movies.map(movie => {
          return (
            <div key={movie.id} className='my-movie wrapper'>
              <h4 className='my-movie__title'>{movie.title}</h4>
              <p className='my-movie__description'>{movie.description}</p>

              <div className='my-movie__cover'>
                <img className='my-movie__image' src={movie.image} alt={movie.title} />
              </div>

              <div className='my-movie__btns'>
                <button>Edit your movie</button>
                <button onClick={() => handleDelete(movie.id)} className='my-movie__delete'>Delete movie</button>
              </div>
            </div>
          )
        })}

    </div>
  )
}

export default MyMoviesList;