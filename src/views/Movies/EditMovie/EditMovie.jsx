import { getMovie, updateMovie } from "../../../services/MovieService";
import InputGroup from "../../../components/InputGroup/InputGroup";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";



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
        reset({ title: movie.title, description: movie.description })
      })
  }, [])

  const onSubmit = (data) => {
    const { title, description } = data
    
    if (!title || !description) {
      setErrors(true)
    } else {
      updateMovie(movie.id, data)
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
        <button>Edit movie</button>
      </form>
      
    </div>
  )
}

export default EditMovie;