import Login from './views/Login/Login';
import { Routes, Route } from 'react-router';
import Profile from './views/Profile/Profile';
import Favourites from './views/Favourites/Favourites'
import Home from './views/Home/Home';
import { useAuthContext } from './contexts/AuthContext';
import ProtectedRoute from './guards/ProtectedRoute'
import Navbar from './components/Navbar/Navbar';
import './App.scss';

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
            </Route>
          </Routes>
        )
      }
      
    </div>
  );
}

export default App;
