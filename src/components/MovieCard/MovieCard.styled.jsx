import styled from 'styled-components';

const StyledMoviesListItem = styled.li`
  width: 298px;
  overflow: hidden;
  border-radius: 2px;
  background-color: rgba(215, 231, 233, 0.9);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const StyledImageWrapper = styled.div`
  height: 447px;
  overflow: hidden;
`;

const StyledCardImg = styled.img`
  width: 100%;
`;

const StyledMovieTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;
export {
  StyledMoviesListItem,
  StyledMovieTitle,
  StyledImageWrapper,
  StyledCardImg,
};
