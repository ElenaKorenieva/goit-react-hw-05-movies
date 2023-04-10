import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from '../routes';
import { lazy } from 'react';
// import Home from '../pages/Home/Home';
// import MovieDetails from '../pages/MovieDetails';
// import Movies from '../pages/Movies';
import { Layout } from 'layout/Layout/Layout';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.MOVIES} element={<Movies />} />
        <Route path={routes.MOVIE_ID} element={<MovieDetails />}>
          <Route path={routes.CAST} element={<Cast />} />
          <Route path={routes.REVIEWS} element={<Reviews />} />
        </Route>
      </Route>

      <Route
        path="*"
        element={<Navigate to={routes.HOME} replace></Navigate>}
      ></Route>
    </Routes>
  );
};

export default App;
