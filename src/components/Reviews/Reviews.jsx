import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import * as API from '../../api/movieApi';
import { StyledMessage } from './Reviews.styled';

const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const res = await API.fetchByReviews(params.movieID);
      console.log(res);
      setReviews(res.results);
    };
    getReviews();
  }, [params.movieID]);

  return (
    <ul>
      {reviews.length ? (
        reviews.map(review => (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <StyledMessage>
          We don't have any reviews for this movie, sorry.
        </StyledMessage>
      )}
    </ul>
  );
};

export default Reviews;
