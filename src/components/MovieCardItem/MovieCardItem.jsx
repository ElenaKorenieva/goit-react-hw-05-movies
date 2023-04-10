import { Outlet, useLocation } from 'react-router-dom';
import { routes } from '../../routes';
import {
  StyledMovieWrapper,
  StyledMovieImg,
  StyledGenreItem,
  StyledMovieGenres,
  StyledMovieText,
  StyledMovieRating,
  StyledCastReviewLink,
  StyledCastReviewList,
} from './MovieCardItem.styled';

const MovieCardItem = ({
  id,
  title,
  name,
  poster_path,
  overview,
  genres,
  backdrop_path,
  release_date,
  vote_average,
}) => {
  // console.log(poster_path);
  // console.log(id);
  const releaseDate = release_date.split('-')[0];
  const rating = Math.round(vote_average * 10);
  const location = useLocation();
  return (
    <>
      <div>
        <StyledMovieWrapper>
          <StyledMovieImg
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={title}
          />

          <div>
            <h2>
              {title} ({releaseDate})
            </h2>
            <h2>User Score:</h2>
            <StyledMovieRating>{rating}%</StyledMovieRating>
            <h2>Overview:</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <StyledMovieGenres>
              {genres
                ? genres.map(el => {
                    return (
                      <StyledGenreItem key={el.id}>
                        <StyledMovieText>{el.name}</StyledMovieText>
                      </StyledGenreItem>
                    );
                  })
                : ''}
            </StyledMovieGenres>
          </div>
        </StyledMovieWrapper>

        <div>
          <h2>Additional information</h2>
          <StyledCastReviewList>
            <li>
              <StyledCastReviewLink to={routes.CAST} state={location.state}>
                Cast
              </StyledCastReviewLink>
            </li>
            <li>
              <StyledCastReviewLink to={routes.REVIEWS} state={location.state}>
                Reviews
              </StyledCastReviewLink>
            </li>
          </StyledCastReviewList>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieCardItem;
