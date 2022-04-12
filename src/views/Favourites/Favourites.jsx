import { useAuthContext } from "../../contexts/AuthContext"

const Favourites = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h1>Favourites</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  )
}

export default Favourites;