import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../../services/MovieService";

const MovieDetail = () => {
  const [movie, setMovie] = useState({})
  const { id } = useParams();

  useEffect(() => {
    getMovie(id)
      .then(movie => setMovie(movie))
  })

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  )
}

export default MovieDetail;