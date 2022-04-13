import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createMovie } from '../../../services/MovieService';
import { useAuthContext } from '../../../contexts/AuthContext';
import InputGroup from '../../../components/InputGroup/InputGroup';

const NewMovie = () => {
  const { user, getUser } = useAuthContext();
  const { register, handleSubmit} = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { title, description } = data

    if (!title || !description) {
      console.log("Wrong data")
    }

    createMovie({...data, user})
      .then((movie) => {
        getUser()
        navigate("/profile")
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Create your movie</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
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