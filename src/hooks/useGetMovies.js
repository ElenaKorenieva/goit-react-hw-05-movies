import { useState, useEffect } from 'react';
import * as API from '../api/movieApi';

// import PropTypes from 'prop-types';

function useGetMovies(props) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const res = await API.fetchByTrending();
        // console.log(res.results);
        setMovies(res.results);
        setSuccess(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);
  return { movies, loading, success };
}

export default useGetMovies;
