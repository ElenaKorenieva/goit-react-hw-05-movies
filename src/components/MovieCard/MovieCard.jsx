import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from '../../routes';
import {
  StyledMoviesListItem,
  StyledMovieTitle,
  StyledImageWrapper,
  StyledCardImg,
} from './MovieCard.styled';

const MovieCard = ({ title, id, poster_path }) => {
  const location = useLocation();
  const currentPage =
    location.pathname === routes.HOME ? routes.MOVIES : location.pathname;

  return (
    <StyledMoviesListItem>
      <NavLink to={`${currentPage}/${id}`} state={{ from: location }}>
        <StyledImageWrapper>
          <StyledCardImg
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : `https://picsum.photos/600/900?image=109`
            }
            alt={title}
          />
        </StyledImageWrapper>

        <StyledMovieTitle>{title}</StyledMovieTitle>
      </NavLink>
    </StyledMoviesListItem>
  );
};

export default MovieCard;
