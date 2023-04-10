import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../api/movieApi';
// import { routes } from '../routes';

const useMovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  // console.log(movieID);

  useEffect(() => {
    setLoading(true);
    const movieDetail = async () => {
      try {
        const res = await API.fetchById(movieID);
        // console.log('res', res);
        setMovie(res);
        setSuccess(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    movieDetail();
  }, [movieID]);
  return { movie, loading, success };
};

export default useMovieDetails;
