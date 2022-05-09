import { getMovie, updateMovie } from "../../../services/MovieService";
import InputGroup from "../../../components/InputGroup/InputGroup";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import "./EditMovie.scss"


const EditMovie = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [movie, setMovie] = useState(null);
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();
  const { getUser } = useAuthContext();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    getMovie(id)
      .then(movie => {
        setMovie(movie)
        reset({ title: movie.title, description: movie.description, image: movie.image })
      })
  },[id, reset])

  const onSubmit = (data) => {
    const bodyFormData = new FormData()

    const { image, ...rest } = data
    
    Object.keys(rest).forEach(key => {
      bodyFormData.append(key, rest[key])
    })


    if(image === movie.image) {
      bodyFormData.append('image', image)
    } else {
      bodyFormData.append('image', image[0])
    }

    if (!rest) {
      console.log('falta info para actualizar')
      setErrors(true)
    } else {
      updateMovie(movie.id, bodyFormData)
        .then((movie) => {
          getUser()
          navigate('/my-movies')
        })
        .catch(err => setErrors(err?.response?.data?.errors))
        .finally(() => setIsSubmitting(true))
    }
  }

  return (
    <div className="wrapper edit-movie">
      <h1>Edit your movie:</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {errors && <div>Check all fields!</div>}
        <div>
          <p>Title:</p>
          <InputGroup 
            label="Título"
            id="title"
            register={register}
            type="text"
          />
        </div>

        <div>
          <p>Description:</p>
          <InputGroup 
            label="Description"
            id="description"
            register={register}
            type="text"
          />
        </div>

        <div>
          <InputGroup
            label="Movie cover"
            id="image"
            register={register}
            type="file"
            placeholder="Cover"
          />
        </div>
        <button className="edit-movie__btn">Edit movie</button>
      </form>
      
    </div>
  )
}

export default EditMovie;