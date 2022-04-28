import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createMovie } from '../../../services/MovieService';
import { useAuthContext } from '../../../contexts/AuthContext';
import InputGroup from '../../../components/InputGroup/InputGroup';
import './NewMovie.scss'

const NewMovie = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(false)
  const navigate = useNavigate();
  const { user, getUser } = useAuthContext();
  const { register, handleSubmit } = useForm();


   const onSubmit = (data) => {
  const bodyFormData = new FormData()

  const { image, ...rest } = data

  Object.keys(rest).forEach(key => {
    bodyFormData.append(key, rest[key])
  })

  if (image[0]) {
    bodyFormData.append('image', image[0])
  }

  bodyFormData.append('user', user.id)

  if (!rest) {
    setErrors(true)
  } else {
    createMovie(bodyFormData)
      .then((movie) => {
        getUser()
        navigate("/my-movies")
      })
      .catch(err => setErrors(err?.response?.data?.errors))
      .finally(() => setIsSubmitting(false))
  }
}


  return (
    <div className='new-movie wrapper'>
      <h1>Create your movie</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {errors && <div>Check all fields!</div>}
        <InputGroup
          label="Título"
          id="title"
          register={register}
          type="text"
          placeholder="Título de la película"  
        />

        <InputGroup
          label="Description"
          id="description"
          register={register}
          type="text"
          placeholder="Movie description"
        />

        <InputGroup
          label="Movie cover"
          id="image"
          register={register}
          type="file"
          placeholder="Cover"
        />

         <button className='new-movie__btn'>Crear movie</button>
      </form>
    </div>
  )
}

export default NewMovie