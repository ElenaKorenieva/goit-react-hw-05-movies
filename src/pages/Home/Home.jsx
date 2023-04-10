import React from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Section from '../../components/Section/Section';
import useGetMovies from '../../hooks/useGetMovies.js';
import Loader from '../../components/Loader';
import { StyledGalleryWrapper, StyledTitle } from './Home.styled';

const Home = () => {
  const { movies, loading, success } = useGetMovies();

  return (
    <StyledGalleryWrapper>
      {loading && <Loader />}
      {success && (
        <Section>
          <>
            <StyledTitle>Trending today</StyledTitle>
            <MovieList movies={movies}></MovieList>
          </>
        </Section>
      )}
    </StyledGalleryWrapper>
  );
};

export default Home;
