import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { serieDetailFromAPI } from "../../../services/MoviesFromAPI/MovieAPIService";


const SerieDetail = () => {
  const [serie, setSerie] = useState({});
  const { id } = useParams();

  console.log(id)
  
  useEffect(() => {
    serieDetailFromAPI(id)
      .then(serieID => {
        setSerie(serieID)
        console.log(serieID)
      })
      
      console.log('hola')
  })


  return (
    <div>
      <h1>Serie detail:</h1>
      {serie && serie.name}
    </div>
  )
}

export default SerieDetail;