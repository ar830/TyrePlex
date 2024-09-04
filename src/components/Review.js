// components/Review.js
import React from 'react';

const Review = ({ name, reviewText }) => {
  return (
    <div className="review">
      <h4>{name}</h4>
      <p>{reviewText}</p>
    </div>
  );
};

export default Review;
