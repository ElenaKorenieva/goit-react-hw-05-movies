import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import Section from '../../components/Section/Section';
import useMovieDetails from '../../hooks/useMovieDetails';
import { routes } from '../../routes';
import MovieCardItem from '../../components/MovieCardItem/MovieCardItem';
import Loader from '../../components/Loader';
import { StyledlinkBack } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movie, loading, success } = useMovieDetails();
  const location = useLocation();
  const backLink = location.state?.from ?? `${routes.HOME}`;
  const saveBackLink = useRef(backLink);

  return (
    <Section>
      <StyledlinkBack to={saveBackLink.current}>Back</StyledlinkBack>
      {loading && <Loader />}
      {success && <MovieCardItem {...movie} />}
    </Section>
  );
};

export default MovieDetails;
