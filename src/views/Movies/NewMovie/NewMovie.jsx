import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { set, useForm } from 'react-hook-form';
import { createMovie } from '../../../services/MovieService';
import { useAuthContext } from '../../../contexts/AuthContext';
import InputGroup from '../../../components/InputGroup/InputGroup';

const NewMovie = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(false)
  const navigate = useNavigate();
  const { user, getUser } = useAuthContext();
  const { register, handleSubmit } = useForm();


  const onSubmit = (data) => {
    const { title, description } = data

    if (!title || !description) {
      setErrors(true)
    } else {
      createMovie({...data, user})
        .then((movie) => {
          getUser()
          navigate("/profile")
        })
        .catch(err => setErrors(err?.response?.data?.errors))
        .finally(() => setIsSubmitting(false))
    }
  }

  return (
    <div>
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
         <button>Crear movie</button>
      </form>
    
    
    </div>
  )
}

export default NewMovie