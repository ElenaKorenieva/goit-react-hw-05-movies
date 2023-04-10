import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../api/movieApi';

const UseSearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [queryS, setQueryS] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [empty, setEmpty] = useState(false);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const getMovies = async () => {
      setLoading(true);
      try {
        const response = await API.fetchByName(query);
        // console.log('res', response);
        if (response.results.length === 0) {
          setEmpty(true);
          return;
        }
        setMovies(response.results);
        setSuccess(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [query, empty]);

  const handleSubmit = value => {
    setQueryS(value);
    setSearchParams({ query: value });
    setEmpty(false);
    setMovies([]);
  };

  if (!movies) return;
  return { movies, loading, success, empty, handleSubmit, queryS };
};

export default UseSearchMovie;
