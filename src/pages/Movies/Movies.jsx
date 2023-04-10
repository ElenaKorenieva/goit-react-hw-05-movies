import React from 'react';
import Section from '../../components/Section/Section';
import MovieList from '../../components/MovieList/MovieList';
import Form from '../../components/Form/Form';
import UseSearchMovie from '../../hooks/useSearchMovie';
import Loader from 'components/Loader';
import { StyledMoviesSearchTitle } from './Movies.styled';

const Movies = () => {
  const { movies, loading, success, empty, handleSubmit } = UseSearchMovie();
  // console.log(empty);
  return (
    <Section>
      <>
        <Form onSubmit={handleSubmit} />
        {loading && <Loader />}
        {empty && (
          <StyledMoviesSearchTitle>
            Movies do not found...Sorry(
          </StyledMoviesSearchTitle>
        )}
        {success && <MovieList movies={movies}>Movies</MovieList>}
      </>
    </Section>
  );
};

export default Movies;
