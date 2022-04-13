import Login from './views/Login/Login';
import { Routes, Route } from 'react-router';
import Profile from './views/Profile/Profile';
import Favourites from './views/Favourites/Favourites'
import NewMovie from './views/Movies/NewMovie/NewMovie';
import Home from './views/Home/Home';
import { useAuthContext } from './contexts/AuthContext';
import ProtectedRoute from './guards/ProtectedRoute'
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import MovieDetail from './views/Movies/MovieDetail/MovieDetail';
import EditMovie from './views/Movies/EditMovie/EditMovie';

function App() {
  const { isAuthenticationFetched } = useAuthContext();

  return (
    <div className="app">
      <Navbar />
      { !isAuthenticationFetched ? (
          <p>Loading...</p>
        ) :  ( 
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/movie/new" element={<NewMovie /> } />
              <Route path="/movie/:id/edit" element={<EditMovie />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
            </Route>
          </Routes>
        )
      }
      
    </div>
  );
}

export default App;
