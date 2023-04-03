import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import Layout from '../Layout/Layout';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi'

import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || {});
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('userId')));
  const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem('savedMovies')) || []);
  const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('allMovies')) || []);
    
  let navigate = useNavigate();

  // проверка токена. нужен для того, чтобы при случае если время жизни куки истечет сделать выход
  useEffect(() => {
    mainApi.getUserProfileInfo()
      .then((res) => {
        console.log('authorization successful');
      })
      .catch((err) => {
        console.log('Error on user token verification attempt', err);
        localStorage.clear();
        setLoggedIn(false);
        setCurrentUser({});
      })
  }, [])

  function onRegister(email, password, name) {
    return mainApi.register(email, password, name)
      .then((res) => {
        onLogin(email, password);
      })
      .catch((err) => {
        return err;
      })
  }

  function onLogin(email, password) {
    return mainApi.login(email, password)
      .then((res) => {
        localStorage.setItem('userId', res._id);
        localStorage.setItem('user', JSON.stringify(res));

        setLoggedIn(true);
        setCurrentUser(res);
        getSavedMovies();
        navigate('/movies');
      })
      .catch((err) => err)
  }

  function onSignOut() {
    mainApi.signout()
      .then((res) => {
        localStorage.clear()
        setCurrentUser({});
        setLoggedIn(false);
        navigate('/');
      })
      .catch((err) => console.log(err))
  }

  function getSavedMovies() {
    mainApi.getMovies()
    .then((res) => {
      setSavedMovies(res);
      localStorage.setItem('savedMovies', JSON.stringify(res));
    })
    .catch(err => console.log('Error fetching saved movies',err))
  }

  function getAllMovies() {
    return moviesApi().then(res => {
      setAllMovies(res);
      return res;
    })
    .catch(err => {
      console.log('Error fetching all movies', err);
      return [];
    })
  }

  function onSaveMovie(movie, currentUser) {
    mainApi.saveMovie(movie, currentUser)
      .then((res) => {
        const newSavedMovies = [...savedMovies, res]

        setSavedMovies(newSavedMovies)
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
      })
      .catch((err) => {
        console.log('Error on save movie attempt',err);
      })
  }

  function onDeleteMovie(movieId) {
    return mainApi.deleteMovie(movieId)
      .then((res) => {
        const newSavedMovies = savedMovies.filter(m => m.movieId !== res.movieId);

        setSavedMovies(newSavedMovies)
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
      })
      .catch((err) => {
        console.log('Error on delete movie attempt',err);
      })
  }

  function handleCurrentUserChange(currentUser) {
    setCurrentUser(currentUser)
    localStorage.setItem('user', JSON.stringify(currentUser));
  }

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="app">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route 
              path='/movies' 
              element={<ProtectedRoute 
                component={Movies} 
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
                getAllMovies={getAllMovies}
                allMovies={allMovies}
              />}
            />
            <Route 
              path='/saved-movies' 
              element={<ProtectedRoute 
                component={SavedMovies} 
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                getSavedMovies={getSavedMovies}
                onDeleteMovie={onDeleteMovie}
              />}
            />
            <Route 
              path='/profile' 
              element={<ProtectedRoute 
                component={Profile} 
                loggedIn={loggedIn}
                handleCurrentUserChange={handleCurrentUserChange}
                onSignOut={onSignOut}
              />}
            />
          </Route>
          <Route path='/signin' element={<Login onLogin={onLogin} loggedIn={loggedIn} />} />
          <Route path='/signup' element={<Register onRegister={onRegister} loggedIn={loggedIn} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
