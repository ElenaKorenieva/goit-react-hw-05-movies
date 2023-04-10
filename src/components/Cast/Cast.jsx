import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import * as API from '../../api/movieApi';
import {
  StyledICastGallery,
  StyledCastItem,
  StyledCastImg,
  StyledCastTitle,
  StyledCastText,
  StyledCastWrapper,
} from './Cast.styled';

const Cast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const res = await API.fetchByActors(params.movieID);
      console.log('res_actors', res);
      setCast(res.cast);
    };
    getCast();
  }, [params.movieID]);

  return (
    <div>
      <StyledICastGallery>
        {cast.map(item => {
          return (
            <StyledCastItem key={item.id}>
              <StyledCastImg
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : `https://picsum.photos/600/900?image=91`
                }
                alt={item.name}
              />
              <StyledCastWrapper>
                <StyledCastTitle>{item.name}</StyledCastTitle>
                <StyledCastText>{item.character}</StyledCastText>
              </StyledCastWrapper>
            </StyledCastItem>
          );
        })}
      </StyledICastGallery>
    </div>
  );
};

export default Cast;
