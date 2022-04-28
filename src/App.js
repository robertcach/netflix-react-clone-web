import Login from './views/Login/Login';
import { Routes, Route } from 'react-router';
import Profile from './views/Profile/Profile';
import NewMovie from './views/Movies/NewMovie/NewMovie';
import Home from './views/Home/Home';
import { useAuthContext } from './contexts/AuthContext';
import ProtectedRoute from './guards/ProtectedRoute'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MovieDetail from './views/Movies/MovieDetail/MovieDetail';
import EditMovie from './views/Movies/EditMovie/EditMovie';
import Series from './views/Series/Series';
import SerieDetail from './views/Series/SerieDetail/SerieDetail';
import './App.scss';
import MyMoviesList from './views/Movies/MyMoviesList/MyMoviesList';

function App() {
  const { isAuthenticationFetched } = useAuthContext();

  return (
    <div className="app">
      <Navbar />
      { !isAuthenticationFetched ? (
          <h1>Loading...</h1>
        ) :  ( 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

              <Route path="/" element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/series" element={<Series />} />
                <Route path="/tv/:id" element={<SerieDetail />} />
                <Route path="/movie/new" element={<NewMovie /> } />
                <Route path="/movie/:id/edit" element={<EditMovie />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/my-movies" element={<MyMoviesList />} />
              </Route>
          </Routes>
        )
      }
      <Footer />
    </div>
  );
}

export default App;
