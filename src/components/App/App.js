import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import Layout from '../Layout/Layout';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/saved-movies",
        element: <SavedMovies />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
    errorElement: <NotFound />
  },
  {
    path: "/signin",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Register />
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
