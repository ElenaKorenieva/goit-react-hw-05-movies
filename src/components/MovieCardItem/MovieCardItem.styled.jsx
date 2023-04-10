import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMovieWrapper = styled.div`
  display: flex;

  gap: 20px;
  background-color: rgba(215, 231, 233, 0.9);
`;

const StyledMovieImg = styled.img`
  display: block;
  width: 298px;
`;
const StyledMovieGenres = styled.ul`
  display: flex;
  gap: 10px;
  padding-bottom: 15px;
`;
const StyledGenreItem = styled.li`
  font-size: 20px;
  text-decoration: none;
  padding: 0 10px;
  background-color: rgba(149, 183, 187, 0.9);
  border-radius: 5px;
`;

const StyledMovieText = styled.p`
  text-align: center;
`;

const StyledMovieRating = styled.p`
  font-weight: 600;
`;
const StyledCastReviewList = styled.ul`
  display: flex;
  gap: 10px;
`;
const StyledCastReviewLink = styled(NavLink)`
  font-size: 22px;
  text-decoration: none;
  padding: 5px 10px;
  background-color: rgba(149, 183, 187, 0.9);
  border-radius: 5px;
  /* color: black; */
  &.active {
    color: #14747a;

    text-decoration: underline;
  }
`;

export {
  StyledMovieWrapper,
  StyledMovieImg,
  StyledGenreItem,
  StyledMovieGenres,
  StyledMovieText,
  StyledMovieRating,
  StyledCastReviewLink,
  StyledCastReviewList,
};
