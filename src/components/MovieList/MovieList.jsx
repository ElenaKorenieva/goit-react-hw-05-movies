import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import { StyledMoviesList } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <StyledMoviesList>
      {movies &&
        movies.map(movie => <MovieCard key={movie.id} {...movie}></MovieCard>)}
    </StyledMoviesList>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
